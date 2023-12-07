import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import DismissKeyboard from "@/components/DismissKeyboardInput/DismissKeyboard";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { IHabit } from "@/constants/types";

const AddModal = ({
  onAddModalClick,
  onEditModal,
  editHabit,
}: {
  onAddModalClick: any;
  onEditModal: any;
  editHabit: IHabit;
}) => {
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [habitID, setHabitID] = useState(uuidv4());

  console.log("rerender");

  const onNameInput = (name: string) => {
    console.log("nameInput", name);
    setHabitName(name);
  };

  const onDescriptionInput = (name: string) => {
    setHabitDescription(name);
  };

  useEffect(() => {
    console.log(editHabit);
    if (editHabit) {
      console.log("edit habit there", editHabit.title);
      onNameInput(editHabit.title);
      onDescriptionInput(editHabit.description);
    }
  }, []);

  return (
    <DismissKeyboard>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Создайте привычку</Text>
        <Text style={styles.inputLabel}>Название привычки</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onNameInput}
          defaultValue={habitName}
        ></TextInput>
        <Text style={styles.inputLabel}>Описание привычки</Text>
        <TextInput
          style={[styles.textInput, styles.textArea]}
          onChangeText={onDescriptionInput}
          multiline={true}
          defaultValue={habitDescription}
        ></TextInput>
        {!editHabit ? (
          <Pressable
            style={styles.addHabitBtn}
            onPress={() =>
              onAddModalClick({
                id: habitID,
                name: habitName,
                description: habitDescription,
                status: false,
              })
            }
          >
            <Text style={styles.habitBtnText}>Создать привычку</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.addHabitBtn}
            onPress={() =>
              onEditModal({
                id: editHabit.id,
                name: habitName,
                description: habitDescription,
                status: false,
              })
            }
          >
            <Text style={styles.habitBtnText}>Изменить привычку</Text>
          </Pressable>
        )}
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "500",
  },
  modalContent: {
    flex: 1,
    height: "100%",
    textAlign: "center",
    display: "flex",
    padding: 30,
    backgroundColor: "#2C2C2C",
    gap: 15,
  },
  addHabitBtn: {
    width: 300,
    padding: 15,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
    marginHorizontal: "auto",
    backgroundColor: "rgba(33, 33, 33, 0.54)",
  },
  habitBtnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 4,
    color: "#fff",
    fontWeight: "400",
  },
  textInput: {
    width: "100%",
    color: "#fff",
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#efefef",
    borderRadius: 20,
  },
  textArea: {
    height: 250,
  },
});

export default AddModal;
