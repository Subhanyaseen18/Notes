import {View, TouchableOpacity} from 'react-native';
import AddProject from '../screen/ProjectScreens/AddProjects';
import Active from '../screen/ProjectScreens/ActiveProjects';
import InActive from '../screen/ProjectScreens/InActiveProjects';
import ActiveIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Entypo';
import { Colours } from '../components/Colors';
import PendingBill from '../screen/BillingScreens/PendingBill';
import Billig from '../screen/BillingScreens/Billing';
import PaidBill from '../screen/BillingScreens/PaidBill';
import createstyles from './style';
import {useThemeAwareObject} from '../theme/theme';
const Tab = createBottomTabNavigator();
export default BillingBottomStack = () => {
  const styles = useThemeAwareObject(createstyles);
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
                name="timer-sand"
                size={20}
                color={focused ? Colours.softblue : Colours.softblack}
              />
            ),
          }}
          name="Pending"
          component={PendingBill}
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
          component={Billig}
        />
        <Tab.Screen
          options={{
          
            tabBarIcon: ({focused}) => (
              <ActiveIcon
                name="timer-sand-complete"
                size={20}
                color={focused ? Colours.softblue : Colours.softblack}
              />
            ),
          }}
          name="Paid"
          component={PaidBill}
        />
      </Tab.Navigator>
    );
  };
  