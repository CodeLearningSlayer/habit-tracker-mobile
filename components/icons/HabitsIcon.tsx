import { View, Text, Image } from "react-native";
import React from "react";
import HabitsIconT from "@/assets/icons/habits.png";

const HabitsIcon = () => {
  return (
    <View>
      <Image source={HabitsIconT}></Image>
    </View>
  );
};

export default HabitsIcon;
