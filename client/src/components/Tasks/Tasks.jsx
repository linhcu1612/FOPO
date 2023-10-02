/** @format */

import React from "react";

import CurrentTask from "./CurrentTask/CurrentTask";
import TasksConfig from "./TasksConfig/TasksConfig";
import AddTask from "./AddTask/AddTask";
import EstTask from "./EstTask/EstTask";
import Task from "./Task/Task";

import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../store/task/taskSlice";

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
      <div>
        {task.map((task) => (
          <Task
            key={task.id}
            {...task}
            theme={props.theme}
            bgColor={props.bgColor}
          />
        ))}
      </div>
      <AddTask addNewTask={addNewTaskHandler} />
      {task.length > 0 && <EstTask est={+estCal()} act={+actCal()} />}
    </div>
  );
};

export default Tasks;
