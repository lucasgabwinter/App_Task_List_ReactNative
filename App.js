import { useState } from 'react';
import GoalItem from './components/GoalIten';
import GoalInput from './components/GoalInput';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function cancelGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    cancelGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return courseGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addButton}>
          <Button
            title="Add New Task"
            color={'#6bcf7a'}
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onFinish={cancelGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 32,
    backgroundColor: '#311b6b',
  },
  goalsContainer: {
    flex: 5,
    marginTop: 32,
  },
  addButton: {
    padding: 16,
    width: '100%',
  },
});
