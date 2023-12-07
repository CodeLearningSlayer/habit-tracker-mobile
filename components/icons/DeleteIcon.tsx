import { View, Text, Image } from "react-native";
// @ts-ignore
import deleteIcon from "@/assets/images/delete.png";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

const DeleteIcon = () => {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={deleteIcon}></Image>
    </View>
  );
};

export default DeleteIcon;
