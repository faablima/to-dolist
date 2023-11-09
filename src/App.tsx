import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

export interface iTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<iTask[]>([]);

  function addTask(taskTitle: string){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks)
  }

  function toggleTaskCompletedById(taskId: string){
    const newTasks = tasks.map((task) => {
      if (task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
      <>
        <Header onAddTask={addTask}/>
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTaskById} 
          onComplete={toggleTaskCompletedById}
        />
      </>
  )
}

export default App
