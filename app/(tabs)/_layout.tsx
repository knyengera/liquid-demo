import React from 'react';

import { withLayoutContext } from 'expo-router';
import {
  createNativeBottomTabNavigator,
  NativeBottomTabNavigationOptions,
  NativeBottomTabNavigationEventMap,
} from '@bottom-tabs/react-navigation';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator;

const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator);

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="book-flight"
        options={{
          title: "Book Flight",
          tabBarIcon: () => ({ sfSymbol: "airplane" }),
        }}
      />
      <Tabs.Screen
        name="my-trips"
        options={{
          title: "My Trips",
          tabBarIcon: () => ({ sfSymbol: "suitcase" }),
        }}
      />
      <Tabs.Screen
        name="flight-status"
        options={{
          title: "Flight Status",
          tabBarIcon: () => ({ sfSymbol: "airplane.circle" }),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: () => ({ sfSymbol: "line.3.horizontal" }),
        }}
      />
    </Tabs>

  );
}
