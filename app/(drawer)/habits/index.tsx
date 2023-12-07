import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { IHabit } from "@/constants/types";
import {
  StyleSheet,
  useWindowDimensions,
  Text,
  View,
  Pressable,
} from "react-native";
import { getDateAndDay } from "../../../utils/timeUtil";
import Habit from "@/components/HabitItem/Habit";
import AddModal from "@/components/AddHabitModal/Modal";
import Colors from "@/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import Filter from "@/components/Filter/Filter";
import { Modal } from "react-native";

export default function HabitsPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editHabit, setEditHabit] = useState();
  const layout = useWindowDimensions();
  const [filters, setFilters] = useState([
    {
      name: "All",
      active: true,
      id: "213",
    },
    {
      name: "Daily",
      active: false,
      id: "231",
    },
  ]);
  const [habits, setHabits] = useState<IHabit[]>([
    {
      name: "bera well",
      status: false,
      id: "213",
    },
    {
      name: "dsadsa well",
      status: false,
      id: "2213",
      type: "Daily",
    },
    {
      name: "gfdfgd well",
      status: false,
      id: "2301934",
    },
    {
      name: "Eaasdasdt well",
      status: false,
      id: "931",
      type: "Daily",
    },
    {
      name: "asdaswe well",
      status: false,
      id: "3019",
      type: "Daily",
    },
  ]);
  const [index, setIndex] = useState(0);
  const [visibleHabits, setVisibleHabits] = useState(habits);

  const onHabitDelete = (id: string) => {
    setHabits(habits.filter((item) => item.id !== id));
  };

  const onHabitClick = (id: string) => {
    setHabits(() =>
      habits.map((habit) => {
        if (habit.id === id) {
          console.log(habit.name);
          return {
            name: habit.name,
            status: !habit.status,
            id: habit.id,
          };
        }
        return habit;
      })
    );
  };

  const onAddClick = () => {
    setEditHabit(undefined);
    setIsModalVisible(true);
  };

  useEffect(() => {
    console.log("modal update");
  }, [isModalVisible]);

  useEffect(() => {
    setVisibleHabits(habits);
  }, [habits]);

  const onEditModalClick = (habit: IHabit) => {
    setEditHabit(habit);
    setIsModalVisible(true);
  };

  const setVisibilityByFilter = (name: string) => {
    console.log(name);
    if (name === "All") {
      setVisibleHabits(habits);
    } else {
      setVisibleHabits(visibleHabits.filter((item) => item.type === name));
    }
  };

  const onSubmitEditModal = useCallback(
    (habit: IHabit) => {
      console.log(habit, "editModalClicked");
      console.log(habits.find((item) => item.id === habit.id));
      setHabits(
        habits.map((item) => {
          if (item.id === habit.id) {
            return habit;
          }
          return item;
        })
      );
      setIsModalVisible(false);
    },
    [habits]
  );

  const onSubmitAddHabitClick = useCallback(
    (habit: {
      name: string;
      id: string;
      description: string;
      status: boolean;
    }) => {
      console.log(habit);
      setHabits([...habits, habit]);
      setIsModalVisible(false);
    },
    [habits]
  );
  const onFilterClick = (filter: {
    id: string;
    active: boolean;
    title: string;
  }) => {
    setFilters(() =>
      filters.map((item) => {
        if (item.id === filter.id) {
          return {
            name: item.name,
            active: true,
            id: item.id,
          };
        }
        return {
          name: item.name,
          active: false,
          id: item.id,
        };
      })
    );
    setVisibilityByFilter(filter.title);
  };

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "#2C2C2C",
          flex: 1,
          padding: 20,
        }}
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <Text style={{ marginBottom: 2, ...styles.text }}>{`${
          getDateAndDay().day
        }, ${getDateAndDay().date}`}</Text>
        <Text style={styles.text}>
          Hello,
          <Text
            style={{
              color: "#F84343",
              flex: 1,
              padding: 20,
            }}
          >
            {` Maxim!`}
          </Text>
        </Text>
        <View style={styles.upperFilters}>
          <View>
            <Text style={styles.aboveFiltersText}>
              Habits - {habits.length}
            </Text>
            <View style={styles.filtersWrapper}>
              {filters.map((item, index) => {
                return (
                  <Filter
                    key={index}
                    title={item.name}
                    id={item.id}
                    active={item.active}
                    onClick={onFilterClick}
                  />
                );
              })}
            </View>
          </View>
          <Pressable style={styles.addHabitBtn} onPress={onAddClick}>
            <Text style={styles.addHabitBtnText}>+</Text>
          </Pressable>
        </View>
        <View style={styles.habitList}>
          {visibleHabits.map((item) => {
            return (
              <Habit
                key={item.id}
                id={item.id}
                title={item.name}
                status={item.status}
                description={item.description}
                setStatus={onHabitClick}
                onDelete={onHabitDelete}
                onEdit={onEditModalClick}
              />
            );
          })}
        </View>
        {/* <FlatList
        data={habits}
        extraData={listRerender}
        style={styles.habitList}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <Habit
            key={item.id}
            id={item.id}
            title={item.name}
            status={item.status}
            setStatus={onHabitClick}
          ></Habit>
        )}
      ></FlatList> */}
      </ScrollView>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="formSheet"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <AddModal
          onAddModalClick={(habit) => onSubmitAddHabitClick(habit)}
          onEditModal={onSubmitEditModal}
          editHabit={editHabit}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  habitList: {
    width: "100%",
    gap: 20,
    marginTop: 20,
  },
  aboveFiltersText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  blocksWrapper: {
    gap: 20,
  },
  upperFilters: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
    gap: 30,
  },
  addHabitBtn: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "red",
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addHabitBtnText: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "500",
  },
  filtersWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  text: {
    color: Colors.textWhite,
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
});
