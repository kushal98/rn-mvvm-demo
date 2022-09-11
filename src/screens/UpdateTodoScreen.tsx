import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useUpdateTodoController from '../view-controllers/useUpdateTodoController';
import {TodoItemType} from '../types/genericTypes';

interface UpdateTodoScreenProps {
  route: {params: {todoItem: TodoItemType}};
}

const UpdateTodoScreen = (props: UpdateTodoScreenProps) => {
  const {todoItem} = props.route.params;

  const {todoText, onChangeText, onClickDelete, onClickUpdate} =
    useUpdateTodoController(todoItem);

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={todoText}
          style={styles.input}
          onChangeText={(text: string) => onChangeText(text)}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onClickUpdate();
          }}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onClickDelete();
          }}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    marginVertical: 8,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  inputView: {
    marginVertical: 24,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default UpdateTodoScreen;
