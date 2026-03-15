import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function Homescreen({ navigation }) {
  const [text , settext] = useState("");
  const [output , setoutput] = useState("");

  function handlepress(){
      setoutput(text);
  }

  
  return (
    <View style={styles.container}>
      <View style = {styles.inputcontainer}>
        <TextInput placeholder='Type the text here' style = {styles.textinputcontainer} 
        onChangeText={settext}
        value={text}/>

        <Button title='Add goal' onPress={handlepress}/>  
        
      </View>
      <Text>You typed  : {output}</Text>
      <Button 
          title="Go to Login"
          onPress={() => navigation.navigate("About")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputcontainer : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
  },
  textinputcontainer : {
    borderWidth : 1,
    borderRadius : 5,
    width : '70%',
    padding : 10
  }
});

