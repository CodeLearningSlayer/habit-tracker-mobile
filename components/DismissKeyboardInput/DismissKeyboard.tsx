import { View, Text } from "react-native";
import React from "react";
import {
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const DismissKeyboard = ({ children }: { children: React.ReactElement }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
