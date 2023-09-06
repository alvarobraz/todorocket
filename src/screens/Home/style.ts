import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  form: {
    width: 280,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    width: 280,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },

  listEmptyText: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent:  'center',
    width: 'auto',
    marginTop: 40,
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  imgSheet: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent:  'center',
    width: 50,
    height: 50,
    left: '40%',
    right: '40%',
    marginBottom:10
  },
  textBold: {
    color: '#808080',
    fontSize: 12,
    fontWeight: 'bold'
  },
  text: {
    color: '#808080',
    fontSize: 12
  }
})