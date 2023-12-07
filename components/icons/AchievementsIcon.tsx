import { View, Text, Image } from "react-native";
import React from "react";
import achIcon from "@/assets/icons/achievements.png";

const AchievementIcon = () => {
  return (
    <View>
      <Image source={achIcon}></Image>
    </View>
  );
};

export default AchievementIcon;
