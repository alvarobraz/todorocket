import { TextInput } from "react-native";

import { styles } from "./style";

type Props = {
  nameTask: string;
  setNameTask: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ nameTask, setNameTask }: Props) {
  return (
    <TextInput 
      style={styles.input}
      placeholder="Adicione uma tarefa"
      placeholderTextColor="#808080"
      value={nameTask}
      onChangeText={(text) => setNameTask(text)} 
    />
  )
}