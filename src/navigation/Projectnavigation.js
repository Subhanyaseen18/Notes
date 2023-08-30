import {View, TouchableOpacity} from 'react-native';
import AddProject from '../screen/ProjectScreens/AddProjects';
import Active from '../screen/ProjectScreens/ActiveProjects';
import InActive from '../screen/ProjectScreens/InActiveProjects';
import ActiveIcon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Entypo';
import {Colours} from '../components/Colors';
import createstyles from './style';
import {useThemeAwareObject} from '../theme/theme';
const Tab = createBottomTabNavigator();
export default ProjectBottomStack = () => {
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
          tabBarIcon: ({focused}) => {
            return (
              <ActiveIcon
                name="done-all"
                size={20}
                color={focused ? Colours.softblue : Colours.softblack}
              />
            );
          },
        }}
        name="Active"
        component={Active}
      />
      <Tab.Screen
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
