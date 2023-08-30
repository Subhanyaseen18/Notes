import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screen/Login';
import Notes from '../screen/NoteScreens/Notes';
import Complete from '../screen/NoteScreens/Completed';
import AddNotes from '../screen/NoteScreens/AddNotes';
import DetailNotes from '../screen/NoteScreens/DetailNotes';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Entypo';
import Ion from 'react-native-vector-icons/Ionicons';
import {Colours} from '../components/Colors';
import ProjectBottomStack from './Projectnavigation';
import PaymentMethod from '../screen/PaymentMethod';
import DetailProject from '../screen/ProjectScreens/ProjectDetail';
import Billnavigation from './Billnavigation';
import DetailBilling from '../screen/BillingScreens/DetailBilling';
import AllDetail from '../screen/ProjectScreens/AllDetail';
import createstyles from './style';
import {useThemeAwareObject} from '../theme/theme';
const Tab = createBottomTabNavigator();
const NoteBottomStack = () => {
  const styles = useThemeAwareObject(createstyles);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colours.softblue,
        tabBarInactiveTintColor: Colours.softblack,
        tabBarLabelStyle: {marginBottom: 2},
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="documents"
              size={20}
              color={focused ? Colours.softblue : Colours.softblack}
            />
          ),
        }}
        name="New"
        component={Notes}
      />
      <Tab.Screen
        name="AddNotes"
        component={AddNotes}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <Icons
                style={styles.ContainerAdd}
                name="circle-with-plus"
                size={60}
                color={focused ? Colours.softblue : Colours.softblack}
              />
            );
          },
        }}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ion
              name="cloud-done-outline"
              size={20}
              color={focused ? Colours.softblue : Colours.softblack}
            />
          ),
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
        <Stack.Screen name="MyDrawer" component={MyDrawer}></Stack.Screen>
        <Stack.Screen name="DetailNotes" component={DetailNotes}></Stack.Screen>
        <Stack.Screen
          name="DetailBilling"
          component={DetailBilling}></Stack.Screen>
        <Stack.Screen
          name="DetailProject"
          component={DetailProject}></Stack.Screen>

        <Stack.Screen name="AllDetail" component={AllDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ProjectBottomStack"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colours.softblue,
        drawerInactiveTintColor: Colours.black,
        drawerItemStyle: {marginVertical: 8},
        drawerLabelStyle: {fontSize: 16},
      }}>
      <Drawer.Screen name="Notes" component={NoteBottomStack} />
      <Drawer.Screen name="Projects" component={ProjectBottomStack} />
      <Drawer.Screen name="Payment" component={PaymentMethod} />
      <Drawer.Screen name="Billing" component={Billnavigation} />
    </Drawer.Navigator>
  );
};
export default MainStack;
