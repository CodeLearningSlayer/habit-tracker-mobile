import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { achievements } from "@/constants/data/achievements";
import Achievement from "@/components/Achievement/Achievement";

const index = () => {
  return (
    <ScrollView
      style={styles.mainView}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.challengesTitle}>Мои достижения</Text>
      <View style={styles.itemsWrapper}>
        {achievements.map((item, index) => {
          return (
            <Achievement
              img={item.img}
              name={item.name}
              sub={item.sub}
              key={index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#2C2C2C",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  challengesTitle: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 24,
    fontWeight: "600",
  },
  itemsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
});

export default index;
