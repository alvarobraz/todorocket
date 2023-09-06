import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    width: 'auto',
    height: 100
  },
  boxCounters: {
    height: 80,
    width: 280,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    borderStyle: 'solid',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  counters: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  textCreated: {
    color: '#4EA8DE',
  },
  textConcluded: {
    color: '#8284FA'
  }
})