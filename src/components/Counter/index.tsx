import { View, Text,  } from "react-native";
import { styles } from "./style";

type Props = {
  counter: number;
}

export default function Counter({ counter }: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.textCounter}>
        {counter}
      </Text>
    </View>
  )

}