import { View, Text,  } from "react-native";
import { styles } from "./style";
import Counter from "../Counter";
import { useState } from "react";

type Props = {
  contCreated: number
  countCocluded: number
}

export default function HeaderHome({ contCreated, countCocluded }: Props) {

 

  return (
    <View style={styles.container}>
      <View style={styles.boxCounters}>
        <View style={styles.counters}><Text style={styles.textCreated}>Criadas </Text><Counter counter={contCreated}/></View>
        <View style={styles.counters}><Text style={styles.textConcluded}>Concluídas </Text><Counter counter={countCocluded}/></View>
      </View>
    </View>
  )

}