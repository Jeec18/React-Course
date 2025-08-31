import {TaskCard} from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../Context/TaskContext'
export function TaskList() {
  const {tasks} = useContext(TaskContext)
  return (
    <div className={'grid grid-cols-4 gap-4'}>
      {tasks.map((task) => (
        <div key={task.id} >
          <TaskCard task={task}/>
        </div>
      ))}
    </div>
  );
}
