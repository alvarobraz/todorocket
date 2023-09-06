import { View, Image } from "react-native";

import { styles } from "./style";

import logoTodoRocket from '../../assets/logo_todorocket.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoTodoRocket} />
    </View>
  )
}