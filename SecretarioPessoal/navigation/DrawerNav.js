import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HojeScreen from "../screens/HojeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "#00e8f0ff", // Corrigido: apenas um #
        drawerStyle: { backgroundColor: "#1e1e1e" },
        drawerActiveTintColor: "#00e8f0ff",
        drawerInactiveTintColor: "#ccc",
      }}
    >
      <Drawer.Screen name="Hoje" component={HojeScreen} />
    </Drawer.Navigator>
  );
}