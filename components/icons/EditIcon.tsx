import { View, Text, Image } from "react-native";
import React from "react";
import editIcon from "@/assets/images/edit.png";

const EditIcon = () => {
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
      <Image source={editIcon}></Image>
    </View>
  );
};

export default EditIcon;
