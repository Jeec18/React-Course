import { createContext, useState,useEffect } from "react";
import { tasks as data } from "../Prueba/task";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, settask] = useState([]);
  function createTask(title, content) {
    const NewTask = {
      id: tasks.length + 1,
      title: title,
      description: content,
    };
    settask([...tasks, NewTask]);
  }
  function deleteTask(TaskId) {
    settask(tasks.filter((task) => task.id !== TaskId));
  }
  useEffect(() => {
    settask(data);
  }, []);
  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask
    }
    }>{props.children}</TaskContext.Provider>
  );
}
