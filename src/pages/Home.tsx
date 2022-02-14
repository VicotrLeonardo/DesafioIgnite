import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    var teste = tasks.find((element) => element.title === newTaskTitle);
    console.log(teste);

    if (teste === undefined) {
      const data = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title: newTaskTitle,
        done: false,
      };
      setTasks((oldState) => [...oldState, data]);
    } else {
      Alert.alert("Titulo Repetido");
    }
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    setTasks((oldState) => {
      let task = oldState.find((task) => task.id === id);
      task.done = !task.done;
      return [...oldState];
    });
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
