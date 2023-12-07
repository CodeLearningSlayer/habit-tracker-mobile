import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Drawer from "expo-router/drawer";
import Header from "../../../components/Header";
export default function Layout() {
  return (
    <Stack>
      <Drawer.Screen
        name="index"
        options={{
          title: "Челленджи",
          headerShown: true,
          header: (props) => <Header {...props} isDrawer={true} />,
        }}
      />
    </Stack>
  );
}
