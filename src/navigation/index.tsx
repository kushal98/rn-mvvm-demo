import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeTodoScreen, NewTodoScreen, UpdateTodoScreen} from '../screens';

import {NavigationContainer} from '@react-navigation/native';
import {screenMap} from './screenMap';

const AppContainer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenMap.HomeTodo}
          component={HomeTodoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenMap.NewTodo}
          component={NewTodoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenMap.UpdateTodo}
          component={UpdateTodoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
