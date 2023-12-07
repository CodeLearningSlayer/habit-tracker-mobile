import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Filter = ({
  id,
  title,
  active,
  onClick,
}: {
  id: string;
  title: string;
  onClick: Function;
  active: boolean;
}) => {
  return (
    <Pressable
      style={[styles.filter, active && styles.activeFilter]}
      onPress={() => onClick({
        id,
        title,
        active
      })}
    >
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filter: {
    borderRadius: 10,
    color: "#fff",
    textTransform: "uppercase",
    backgroundColor: "rgba(33, 33, 33, 0.54)",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  activeFilter: {
    borderColor: "red",
    borderWidth: 1,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Filter;
