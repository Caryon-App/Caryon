// App.js
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import InspirationScreen from "./src/screens/main/InspirationScreen";
import LoginScreen from "./src/screens/main/LoginScreen";
import RegisterScreen from "./src/screens/main/RegisterScreen";
import ShoppingListScreen from "./src/screens/main/ShoppingListScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "ShoppingList") {
            iconName = "shopping-cart";
          } else if (route.name === "Inspiration") {
            iconName = "lightbulb";
          }
          return (
            <FontAwesome5
              name={iconName}
              size={size}
              color={color}
              solid={focused}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="ShoppingList"
        component={ShoppingListScreen}
        options={{ title: "Lista de Compras" }}
      />
      <Tab.Screen
        name="Inspiration"
        component={InspirationScreen}
        options={{ title: "Inspiración" }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
