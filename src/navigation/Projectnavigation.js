import AddProject from '../screen/ProjectScreens/AddProjects';
import Active from '../screen/ProjectScreens/ActiveProjects';
import InActive from '../screen/ProjectScreens/InActiveProjects';
import ActiveIcon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Entypo';
import { Colours } from '../components/Colors';
const Tab = createBottomTabNavigator();
export default ProjectBottomStack = () => {
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
            tabBarIcon: ({focused}) => (
              <ActiveIcon
                name="done-all"
                size={20}
                color={focused ? Colours.softblue : Colours.softblack}
              />
            ),
          }}
          name="Active"
          component={Active}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <Icons
                name="circle-with-plus"
                size={30}
                color={focused ? Colours.softblue : Colours.softblack}
              />
            ),
          }}
          name="."
          component={AddProject}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <ActiveIcon
                name="remove-done"
                size={20}
                color={focused ? Colours.softblue : Colours.softblack}
              />
            ),
          }}
          name="InActive"
          component={InActive}
        />
      </Tab.Navigator>
    );
  };
  