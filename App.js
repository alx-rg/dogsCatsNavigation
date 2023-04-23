import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { DetailsScreen } from './DetailsScreen';

function HomeScreen({ navigation }) {
 return (
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 <Text>Home Screen</Text>
 <Button
    title="Go to Details"
    onPress={() => {
      navigation.navigate('Details', {
        itemId: 86,
        otherParam: 'anything you want here',
      });
    }}
  />
 </View>
 );
}

function DetailsScreen({ navigation }) {
  return (

   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Text>Details Screen</Text>
   <Button
    title='Goooooo to Details... again'
    onPress={() =>
      navigation.push('Details', {
        itemId: Math.floor(Math.random() * 100),
      })
    }
   />
   <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
   <Button title="Go Back" onPress={() => navigation.goBack()} />
   </View>
  );
 }


const Stack = createStackNavigator();

function App() {
 return (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
      headerStyle: {
      backgroundColor: '#e1154f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold',
      },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
        title: "Hello World",
        headerStyle: {
        backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
        }
        }}
      />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
 );
}

export default App;
