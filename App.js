import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShoppingListScreen from "./src/screens/main/ShoppingListScreen";
import InspirationScreen from "./src/screens/main/InspirationScreen";
import ProfileScreen from "./src/screens/main/ProfileScreen";
import { FontAwesome5 } from "@expo/vector-icons";

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
          // Aquí puedes continuar añadiendo las opciones que antes estaban en tabBarOptions
        })}
      >
        <Tab.Screen name="ShoppingList" component={ShoppingListScreen} />
        <Tab.Screen name="Inspiration" component={InspirationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
