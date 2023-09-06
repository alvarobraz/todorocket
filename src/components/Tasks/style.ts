import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 280,
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 999
  },
  checkedCheckbox: {
    backgroundColor: '#4EA8DE',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 999
  },
  imgCheckedCheckbox: {
    width: 12,
    height: 9,
    left: 2,
    top: 3
  },
  name: {
    flex: 1,
    fontSize: 12,
    color: '#FFF',
    marginLeft: 16
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center'
  },
})