import {useContext} from 'react'
import {TaskContext} from '../Context/TaskContext'
export function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div className={'bg-blue-800 text-white p-4 rounded-md '}>
        <h5 className={'font-bold capitalize'}>{task.title}</h5>
        <p className={'text-gray-500'}>{task.description}</p>
        <button className={'bg-red-500 rounded-lg px-2 py-1 mt-4'} onClick={()=>deleteTask(task.id)}>Eliminar</button>
        <hr></hr>
    </div>
  )
}

