import { View, Text, Image } from "react-native";
import React from "react";
import chalIcon from "@/assets/icons/challenges.png";

const ChallengesIcon = () => {
  return (
    <View>
      <Image source={chalIcon}></Image>
    </View>
  );
};

export default ChallengesIcon;
