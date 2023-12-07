import { View, Text, Image } from "react-native";
// @ts-ignore
import check from "@/assets/images/check.png";
import React from "react";

const CheckIcon = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 28,
        height: 28,
      }}
    >
      <Image source={check}></Image>
    </View>
  );
};

export default CheckIcon;
