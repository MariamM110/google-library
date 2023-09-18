import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from './src/screens/Welcome';
import {DetailScreen} from './src/screens/Detail';
import {theme} from './src/utils/themes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Bookgram',
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: theme.colourPrimaryGreen,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            },
            headerTitleStyle: {
              fontFamily: 'Special Elite',
              fontSize: 25,
              color: theme.colourWhite,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
