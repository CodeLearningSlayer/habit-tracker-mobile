import React, { useState } from "react";
import { Stack } from "expo-router";
import Drawer from "expo-router/drawer";
import Header from "../../../components/Header";

export default function Layout() {
  return (
    <>
      <Stack>
        <Drawer.Screen
          name="index"
          options={{
            title: "Мои привычки",
            headerShown: true,
            header: (props) => <Header {...props} isDrawer={true} />,
          }}
        />
      </Stack>
    </>
  );
}
