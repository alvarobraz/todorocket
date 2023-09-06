import {TouchableOpacity, Text, Image } from "react-native";

import { styles } from "./style";

import circleAdd from '../../assets/circle_add.png'

type Props = {
  handleAddTask: () => void
}

export default function Button({ handleAddTask }: Props) {

  return (
    <TouchableOpacity style={styles.button} onPress={handleAddTask}>
      <Image
        style={styles.image}
        source={circleAdd}
        />
    </TouchableOpacity>
  )
}