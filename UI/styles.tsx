import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:40,
   // padding: 20,
  },
  boardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    height:280,
    width:280,
    paddingVertical:20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  squareContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fefae0', // added background color with opacity
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
   alignItems: 'center',
    margin: 9,
    borderRadius:10,
  },
  squareText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001d3d',
  },
  winnerText: {
    fontSize: 36,
    color: '#4f000b',
    //marginTop: 20,
    fontWeight: 'bold',
    marginBottom:30,
    marginHorizontal:80,
  },
  text:{
    fontFamily: 'Pacifico',
    fontSize:36,
    color:'#4f000b',
    textAlign:'center',
    fontWeight:'bold',
    marginTop:200,
  },
  button:{
    textAlign:'center',
  },
  buttonImage:{
    width:350,
    height:60,
    textAlign:'center',
    alignItems:'center',
    paddingVertical:10,
  },
  buttonText:{
    alignSelf:'center',
    fontSize:24,
    color:'#4f000b',
    fontWeight:'bold',
    marginVertical:5,
    marginLeft:10,
  },
  topImage:{
    height:280,
    width:280,
    marginBottom:10,
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  replayButton:{
    flexDirection: 'row',
  },
  retryImage:{
    height:25,
    width:25,
    marginVertical:10,
    marginLeft:5,
  }
  
});