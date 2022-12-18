/** @format */

import React from "react";

import CurrentTask from "./CurrentTask";
import TasksConfig from "./TasksConfig";
import TasksList from "./TasksList";
import AddTask from "./AddTask";
import EstTask from "./EstTask";

import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../store/task";

const Tasks = (props) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.taskList);

  const addNewTaskHandler = (task) => {
    dispatch(taskActions.addTask(task));
  };

  const actCal = () => {
    let countAct = 0;
    task.map((data) => (countAct += data.pomoDone));
    return countAct;
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
      <TasksList theme={props.theme} bgColor={props.bgColor} />
      <AddTask addNewTask={addNewTaskHandler} />
      {task.length > 0 && <EstTask est={+estCal()} act={+actCal()} />}
    </div>
  );
};

export default Tasks;
