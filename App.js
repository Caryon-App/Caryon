// App.js
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import IngredientsScreen from "./src/screens/main/IngredientsScreen";
import InspirationScreen from "./src/screens/main/InspirationScreen";
import LoginScreen from "./src/screens/main/LoginScreen";
import RegisterScreen from "./src/screens/main/RegisterScreen";
import ShoppingListScreen from "./src/screens/main/ShoppingListScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "ShoppingList") {
              iconName = "shopping-cart";
            } else if (route.name === "Inspiration") {
              iconName = "lightbulb";
            } else if (route.name === "Profile") {
              iconName = "user";
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
        <Tab.Screen name="ShoppingList" component={ShoppingListScreen} />
        <Tab.Screen name="Inspiration" component={InspirationScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="Ingredients" component={IngredientsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
