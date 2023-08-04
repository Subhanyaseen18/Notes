import {View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screen/Login';
import Notes from '../screen/Notes';
import Complete from '../screen/Completed';
import AddNotes from '../screen/AddNotes';
import DetailNotes from '../screen/DetailNotes';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Entypo';
import Ion from 'react-native-vector-icons/Ionicons';
import { Colours } from '../components/Colors';
const Tab = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarVisible: route.name !== '.',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colours.softblue,
        tabBarInactiveTintColor: Colours.softblack,
        tabBarLabelStyle: {marginBottom: 2},
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <Icon name="documents" size={20} color={focused? Colours.softblue:Colours.softblack} />,
        }}
        name="New"
        component={Notes}
      />
      <Tab.Screen
        options={{
       
          tabBarIcon: ({focused}) => <Icons name="circle-with-plus" size={30} color={focused? Colours.softblue:Colours.softblack}/>,
        }}
        name="."
        component={AddNotes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <Ion name="cloud-done-outline" size={20} color={focused? Colours.softblue:Colours.softblack}/>,
        }}
        name="Complete"
        component={Complete}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="BottomStack" component={BottomStack}></Stack.Screen>
        <Stack.Screen name="DetailNotes" component={DetailNotes}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
