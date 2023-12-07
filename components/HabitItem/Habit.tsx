import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import DeleteIcon from "@/components/icons/DeleteIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import EditIcon from "@/components/icons/EditIcon";

export default function HabitItem({
  title,
  status,
  id,
  description,
  setStatus,
  onDelete,
  onEdit,
}: {
  title: string;
  status: boolean;
  description: string;
  id: string;
  setStatus: Function;
  onDelete: Function;
  onEdit: Function;
}) {
  const onCheckboxClick = () => {
    setStatus(id);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.habits} onPress={onCheckboxClick}>
        {status ? (
          <View style={styles.checkboxFilled}>
            <CheckIcon />
          </View>
        ) : (
          <View style={styles.checkbox}></View>
        )}
        <Text style={[styles.text, status && styles.textOver]}>{title}</Text>
      </Pressable>
      <Pressable
        style={styles.habitOption}
        onPress={() =>
          onEdit({
            title,
            status,
            id,
            description,
          })
        }
      >
        <EditIcon />
      </Pressable>
      <Pressable style={styles.habitOption} onPress={() => onDelete(id)}>
        <DeleteIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    gap: 5,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "red",
    borderStyle: "solid",
  },
  checkboxFilled: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
    backgroundColor: "red",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  textOver: {
    textDecorationLine: "line-through",
  },
  habits: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#232323",
    borderRadius: 20,
    flexGrow: 1,
  },
  habitOption: {
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#232323",
  },
});
