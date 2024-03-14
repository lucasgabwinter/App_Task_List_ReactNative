import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Button,
  Modal,
} from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  function handlePress() {
    setEnteredGoalText('');
    props.onFinish();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals!!"
          placeholderTextColor="#490951"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsSpace}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={handlePress}
              color={'rgb(124, 11, 11)'}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add task"
              onPress={addGoalHandler}
              color={'#6bcf7a'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
    paddingBottom: 128,
  },
  buttonsSpace: {
    marginTop: 16,
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#cccccc',
    color: '#490951',
    width: '90%',
    padding: 16,
    borderRadius: 5,
  },
  button: {
    padding: 8,
    width: '40%',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
