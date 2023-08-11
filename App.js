import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";

import GoalsItem from "./components/GoalsItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalGoalVisible, setModalGoalVisible] = useState(false);

  function startAddGoalHandler() {
    setModalGoalVisible(true);
  }

  function endAddGoalHandler() {
    setModalGoalVisible(false);
  }

  function addGoalHandler(enteredText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function deleteItemHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((g) => g.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" onPress={startAddGoalHandler} />
      <GoalInput visible={modalGoalVisible} addGoalHandler={addGoalHandler} closeModal={endAddGoalHandler} />

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalsItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteItemHandler}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 16,
    flex: 1,
  },

  goalContainer: {
    flex: 6,
  },
});
