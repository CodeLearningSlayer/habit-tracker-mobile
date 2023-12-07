import { View, Text, Modal, StyleSheet } from "react-native";
import "react-native-svg";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
import ChallengesIcon from "@/components/icons/ChallengesIcon";
import AchievementIcon from "@/components/icons/AchievementsIcon";
import HabitsIcon from "@/components/icons/HabitsIcon";

export default function Layout() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <ToastProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerShown: false,
            swipeEdgeWidth: 100,
            drawerStyle: styles.drawer,
            drawerActiveBackgroundColor: "#2E2D2D",
            drawerLabelStyle: {
              color: "#fff",
              fontWeight: "500",
              fontSize: 20,
              marginLeft: -20,
            },
          }}
        >
          <Drawer.Screen
            name="habits"
            options={{
              drawerLabel: "Мои привычки",
              title: "Мои привычки",
              drawerIcon() {
                return <HabitsIcon />;
              },
            }}
          />
          <Drawer.Screen
            name="challenges"
            options={{
              drawerLabel: "Челленджи",
              title: "Челленджи",
              drawerIcon() {
                return <ChallengesIcon />;
              },
            }}
          />
          <Drawer.Screen
            name="achievements"
            options={{
              drawerLabel: "Достижения",
              title: "Достижения",
              drawerIcon() {
                return <AchievementIcon />;
              },
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: "Челленджи",
              title: "Челленджи",
              drawerIcon() {
                return <ChallengesIcon />;
              },
            }}
          />
        </Drawer>
        <Modal visible={isModalVisible}>
          <Text>hi</Text>
        </Modal>
      </GestureHandlerRootView>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#202020",
  },
  drawerItem: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});
