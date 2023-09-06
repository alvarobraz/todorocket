import { View, FlatList, ImageBackground, Text } from "react-native";

import { styles } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import HeaderHome from "../../components/HeaderHome";
import { useEffect, useState } from "react";
import { Tasks } from "../../components/Tasks";

import imageSheet from '../../assets/sheet.png'

interface TasksProps {
  status: boolean,
  nameTask: string,
}

export default function Home() {

  const [nameTask, setNameTask] = useState('');
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [ contCreated, setCountCreated ] = useState(0)
  const [ countCocluded, setCountCounclude ] = useState(0)

  function handleAddTask() {

    if(nameTask === '') return

    const isNameTaskExist = tasks.some((tk) => tk.nameTask === nameTask);
    
    if (!isNameTaskExist) {
      const newItem = { status: false, nameTask };
      setTasks([...tasks, newItem]);
      setNameTask('');
    } else {
      alert(`Já existe uma tarefa com o mesmo nome ${nameTask}`)
    }

  }

  const handleCheckboxChange = (task: string) => {
    const taskToUpadate = tasks.find((tk) => tk.nameTask === task);
    if (taskToUpadate) {
      taskToUpadate.status = taskToUpadate.status === false ? true : false;
      setTasks([...tasks]);
    }
  };

  function handleRemoveTask(task: string) {
    const updatedTasks = tasks.filter((tk) => String(tk.nameTask) !== String(task));
    setTasks(updatedTasks);
  }

  useEffect(()=>{
    const taskConcluded = tasks.filter((task) => task.status === true);
    setCountCounclude(taskConcluded.length)
    setCountCreated(tasks.length)
  },[tasks])

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
        setNameTask={setNameTask}
        nameTask={nameTask}
        />
        <Button
        handleAddTask={handleAddTask}
        />
      </View>
      <View style={styles.header}>
        <HeaderHome
        contCreated={contCreated}
        countCocluded={countCocluded}
        />
      </View>
      <FlatList
        data={tasks} 
        keyExtractor={(item) => item.nameTask}
        renderItem={({ item }) => (
          <Tasks
            key={item.nameTask} 
            name={item.nameTask}
            taskStatus={item.status}
            handleCheckboxChange={()=>handleCheckboxChange(item.nameTask)}
            handleRemoveTask={()=>handleRemoveTask(item.nameTask)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyText}>
              <ImageBackground source={imageSheet} style={styles.imgSheet}/>
              <Text style={styles.textBold}>
              Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.text}>
              Crie tarefas e organize seus itens a fazer
              </Text>
          </View>  
        )}
      />
    </View>
  )
}