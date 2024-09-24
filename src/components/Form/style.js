import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: '100%',
    bottom:0 ,
    backgroundColor: '#DDDEC6',
    alignItems:'center',
    marginTop: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius:20,

  },
  form:{
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding:15,
  },

  formLabel:{
    color: '#453831',
    fontSize:18,
    fontWeight:'bold',
    paddingLeft: 15,
  },
  imput:{
    width:'90%',
    fontSize:'20',
    borderRadius: 50,
    backgroundColor:'#f6f6f6',
    height:40,
    marginBottom: 10,
    paddingLeft:10, 
  },
  buttonCalculator:{
    borderRadius:50,
    alignItems: 'center',
    justifyContent:'center',
    width:'90%',
    backgroundColor: '#93869B',
    paddingBottom:14,
    paddingTop:14,
    marginLeft:12,
    marginTop:30,
  },
  textButtonCalculator:{
    fontSize:22,
    color: '#453831',
    fontWeight:'900',
    }
    
});

export default styles