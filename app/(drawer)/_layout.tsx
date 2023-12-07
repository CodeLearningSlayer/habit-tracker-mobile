import { View, Text, Modal } from "react-native";
import "react-native-svg";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router";

export default function Layout() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false, swipeEdgeWidth: 100 }}>
        <Drawer.Screen
          name="habits"
          options={{
            drawerLabel: "Мои привычки",
            title: "Мои привычки",
          }}
        />
        <Drawer.Screen
          name="challenges"
          options={{
            drawerLabel: "Челленджи",
            title: "Челленджи",
          }}
        />
        <Drawer.Screen
          name="achievements"
          options={{
            drawerLabel: "Достижения",
            title: "Достижения",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Настройки",
            title: "Настройки",
          }}
        />
      </Drawer>
      <Modal visible={false}>
        <Text>hi</Text>
      </Modal>
    </GestureHandlerRootView>
  );
}
