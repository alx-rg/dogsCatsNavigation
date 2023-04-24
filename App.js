import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

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
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
