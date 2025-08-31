import {useState,useContext} from 'react'
import {TaskContext} from '../Context/TaskContext'
export function TaskForm() {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const {createTask} = useContext(TaskContext)
    const HandleSubmit= (e)=>{
        e.preventDefault()
        createTask(title,content)
        settitle("")
        setcontent("")
    }
  return (
    <form onSubmit={HandleSubmit} className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 max-w-md mx-auto">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Nueva Tarea
  </h2>
  
  <div className="space-y-4">
    {/* Input para el título */}
    <input 
      placeholder="Escribe el título aquí..." 
      value={title}
      onChange={(e) => settitle(e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-700"
    />

    {/* Input para la descripción */}
    <input 
      placeholder="Describe tu tarea..." 
      value={content}
      onChange={(e) => setcontent(e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-700"
    />

    {/* Botón de guardar */}
    <button 
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
    >
      Guardar
    </button>
  </div>
</form>
    
  )
}
