import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {CustomText} from '../components/Text';
import {Feed} from './Feed';
import {Provider} from '../context';

const Stack = createNativeStackNavigator();

export function FeedStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     color: 'red',
//   },
// });

//add a stack here to show the different pages that will be used to navigate through the tab
// <View>
//   <CustomText fontWeight="500" style={styles.text}>
//     Hello
//   </CustomText>
// </View>
