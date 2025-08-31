import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";

export function App() {  
  return (
    <main className={'px-4'}>
      <TaskForm />
      <TaskList/>
    </main>
  );
}
