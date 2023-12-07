import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

const Achievement = ({
  img,
  name,
  sub,
}: {
  img: string;
  name: string;
  sub: string;
}) => {
  return (
    <View style={styles.challengeWrapper}>
      <View style={styles.imgBox}>
        <Image style={styles.image} source={img}></Image>
      </View>
      <View style={styles.info}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.sub}>{sub}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  challengeWrapper: {
    backgroundColor: "rgba(83, 83, 83, 0.15)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    overflow: "hidden",
    gap: 15,
    width: 178,
  },
  info: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    display: "flex",
    gap: 10,
  },
  imgBox: {
    position: "relative",
  },
  sub: {
    color: "#929292",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1212126e",
  },
  image: {
    width: 172,
    height: 166,
  },
  challengeButton: {
    backgroundColor: "#322E2E",
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "20%",
    padding: 8,
    borderRadius: 8,
  },
  nameText: {
    color: "#fff",
    fontWeight: "500",
  },
});

export default Achievement;
