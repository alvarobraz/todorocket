import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";

import { styles } from "./style";
import imageTrash from '../../assets/trash.png';
import imageChecked from '../../assets/checked.png';

type Props = {
  name: string;
  taskStatus: boolean;
  handleCheckboxChange: () => void;
  handleRemoveTask: () => void;
}

export function Tasks({ name, taskStatus, handleCheckboxChange, handleRemoveTask }: Props) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxChange}>
      {
        !taskStatus ?
        <View style={styles.checkbox} />
        :
        <View style={styles.checkedCheckbox}>
          <ImageBackground source={imageChecked} style={styles.imgCheckedCheckbox}/>
        </View>
      }
        
      </TouchableOpacity>
      <Text style={[styles.name, taskStatus && styles.lineThrough]}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleRemoveTask}>
         <Image
         source={imageTrash}
         />
      </TouchableOpacity>
    </View>
  )
}