import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


const Profile = require('../assets/icon.png')

export default function AboutScreen({navigation}) {
  return (
    <View style = {styles.container}>
        <View style = {styles.firstview}>
            <Text style = {styles.fontlable}>Profile</Text>
            <Image source={Profile} style = {styles.Imagecontainer}/>
        </View>
        <View style = {styles.statuscontainer}>
          <Text style = {styles.fontlable}>James</Text>
          <Text style = {styles.fontsmall}>Available</Text>
        </View>
        <View style = {styles.secondview}>
            <View style = {styles.box}>
                <Text style = {styles.fontlable}>97 pt </Text>
                <Text style = {styles.fontsmall}>Rating</Text>
            </View>
            <View style = {styles.divider}/>
            <View style = {styles.box}>
                <Text style = {styles.fontlable}>23 </Text>
                <Text style = {styles.fontsmall}>Views</Text>
            </View>
            <View style = {styles.divider}/>
            <View style = {styles.box}>
                <Text style = {styles.fontlable}>2 </Text>
                <Text style = {styles.fontsmall}>credits</Text>
            </View>
        </View>
        <View style = {styles.card}>
          <Text style = {styles.fontlable}>Go premium & Stop location Tracking</Text>
          <Text style = {styles.listitem}>•	Get 3 GPS dismiss possibilities for 30 days</Text>
          <Text style = {styles.listitem}>•	Save 30% on each GPS turn off</Text>
          <Text style = {styles.listitem}>•	Stay on the date as long as you both enjoy it</Text>

          <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Detail')}><Text style = {styles.buttontext}><MdHome  style={styles.iconstyle}/>Show Details</Text></TouchableOpacity>
        </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    margin : 20,
    alignItems : 'center',
  },
  statuscontainer : {
    padding : 15,
    backgroundColor : 'gray',
    borderRadius : 80,
    alignItems : 'center',
    marginBottom : 20,
    position : 'absolute',
    transform : [{translateY : 200}]
  },
  Imagecontainer : {
    height : 200,
    width : 200,
    borderRadius : 100,
    marginBottom : 40,
    borderWidth : 2,
    borderColor : 'red',
    marginTop : 20,
  },
  firstview : {
    alignItems : 'center'
  },
  secondview : {
    flexDirection : 'row',
    width : '80%',
    justifyContent : 'space-around',
    marginBottom : 30,
  },
  box : {
    alignItems : 'center',
    backgroundColor : '#9a9696ff',
    height : 80,
    width : 80,
    borderRadius : 6,
  },
  fontlable : {
    fontSize : 20,
    fontWeight : '600',
    marginTop : 10 
  },
  fontsmall : {
    fontSize : 16,
  },
  divider : {
    marginHorizontal : 4,
    width : 1,
    backgroundColor : 'black'
  },
  listitem : {
    fontSize : 18,
    color : 'gray',
    marginLeft : 30
  },
  card : {
    padding : 20,
    backgroundColor : '#e9d0d0ff',
    borderRadius : 20,
    shadowOffset : {width : 0, height : 8},
    shadowOpacity : 0.08
  },
  button : {
    backgroundColor : 'red',
    borderRadius : 30,
    alignItems : 'center',
    marginTop : 20,
    marginBottom : 15
  },
  buttontext : {
    color : 'white',
    fontSize : 20,
    fontWeight : 500,
    //paddingBottom : 10
  },
  iconstyle : {
    color : '#ffffffff',
    fontSize : 30,
    paddingRight : 5,
    paddingTop : 10,
    alignItems : 'center'
  },
  bottombarcontainer : {
    flex : 1,
    justifyContent : 'flex-end',
    flexDirection : 'row',
  },
  sample : {
    justifyContent : 'space-evenly',
  },
});