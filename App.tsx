import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from './src/screens/LoginScreens/Welcome';
import {TabsNavigator} from './src/screens/LoginScreens/Tabs';
import {RootStackParamList} from './src/types';
import {Login} from './src/screens/LoginScreens/Login';
import {BookmarkProvider} from './src/context/bookmarkContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <BookmarkProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          {/* cannot access the Feed unless logged in */}
          <Stack.Screen name="Tabs" component={TabsNavigator} />
        </Stack.Navigator>
      </BookmarkProvider>
    </NavigationContainer>
  );
}

export default App;
