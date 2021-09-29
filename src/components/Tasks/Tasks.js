/** @format */

import React from "react";

import CurrentTask from "./CurrentTask";
import TasksConfig from "./TasksConfig";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import EstTask from "./EstTask";

import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../store/task";

const Task = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.taskList);

  const addNewTaskHandler = (task) => {
    dispatch(taskActions.addTask(task));
  };

  const estCal = () => {
    let count = 0;
    task.map((data) => (count += data.estimatedPomo));
    return count;
  };

  return (
    <div style={{ margin: "auto 70px" }}>
      <CurrentTask />
      <TasksConfig />
      <TasksList />
      <AddTask addNewTask={addNewTaskHandler} />
      {task.length > 0 && <EstTask est={+estCal()} act={task.length} />}
    </div>
  );
};

export default Task;
