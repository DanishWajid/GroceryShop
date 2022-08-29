import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import {Shop, Cart} from '../screens';
import {COLORS} from '../theme/colors';
import {normalize} from '../utils/scale';

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            const icons = {
              Shop: 'shop',
              Cart: 'shopping-cart',
            };
            return (
              <Entypo
                name={icons[route.name]}
                size={normalize(25)}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: COLORS.PRIMARY_GREEN,
          tabBarInactiveTintColor: COLORS.PRIMARY_BLACK,
          tabBarStyle: styles.tabBarStyle,
          tabBarItemStyle: styles.tabBarItemStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          headerShown: false,
        })}>
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: '10%',
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '2%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // position: 'absolute',
    overflow: 'hidden',
  },
  tabBarItemStyle: {
    flex: 0.25,
  },
  tabBarLabelStyle: {fontSize: 16},
});
