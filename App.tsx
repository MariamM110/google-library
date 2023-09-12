import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello BeRealers</Text>
      <Button
        title="Go to another screen"
        onPress={() => navigation.navigate('Screen')}
      />
    </View>
  );
}

function AnotherScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hai</Text>
      <Button
        title="Go to another screen... again"
        onPress={() => navigation.push('Screen')} //cannot use '.navigate' since its on the same page
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()} //allow the user to return one stack backwards
      />
      <Button
        title="Go to Home page immediately"
        onPress={() => navigation.popToTop()} //takes the user immediately to the main page (what is stacked at the top in app.js)
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Homepage'}}
        />
        <Stack.Screen
          name="Screen"
          component={AnotherScreen}
          options={{title: 'Another one'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
