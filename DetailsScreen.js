import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style = {styles.textcontainer}>Welcome ,</Text>
        <TextInput placeholder='Search' style = {styles.textinputcontainer}/>
        <View style = {styles.box1}>
            <TouchableOpacity style = {styles.boxcontainer} onPress={() => navigation.navigate('RP')}>
                <Text style = {styles.boxtext}>Register Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.boxcontainer}>
                <Text style = {styles.boxtext}>Form Entry</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.box1}>
            <TouchableOpacity style = {styles.boxcontainer}>
                <Text style = {styles.boxtext}>Manage Providers</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.boxcontainer}>
                <Text style = {styles.boxtext}>Active Visit </Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems : 'center',
    margin : 20
  },
  textinputcontainer : {
    height : 50,
    width : '85%',
    color : '#a1a1a1ff',
    borderWidth : 1,
    padding : 15,
    borderRadius : 50,
  },
  textcontainer : {
    fontSize : 30,
    fontWeight : 700,
    marginBottom : 20,
    textAlign : 'left',
  },
  boxcontainer : {
    height : 150,
    width : 150,
    backgroundColor : 'blue',
    alignItems : 'center',
    justifyContent : 'flex-end',
    padding : 10,
    borderRadius : 10
    //justifyContent : 'space-between'
  },
  box1 : {
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    width : '90%',
    paddingBottom : 20,
    paddingTop : 20,
  },
  boxtext : {
    color : 'white',
    fontSize : 18,
  }
  
});
