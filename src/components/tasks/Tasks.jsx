import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask, deleteTask } from '../../context/taskSlice'
import "./Tasks.scss"

const Tasks = () => {
    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [editId, setEditId] = useState(null)

    const handleSumbit = (e) => {
        e.preventDefault()
        if(editId){
            dispatch(updateTask({id: editId, title, completed: false}))
            setEditId(null)
        }else{
            dispatch(addTask({ title, completed: false }))
        }
        setTitle('')
    }

    const handleEdit = (task) => {
        setTitle(task.title)
        setEditId(task.id)
    }

  return (
    <main>
        <div className='wrapper'>
            <div className="tasks">
                <h1>Bugungi rejalaringiz!</h1>
                <form action="" onSubmit={handleSumbit}>
                    <input 
                    type="text"
                    placeholder='Rejaning nomi'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                    <button type='sumbit'>{editId ? 'Update' : "Add"}</button>
                </form>
                <ul className='tasks'>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span>{task.title}</span>
                            <button onClick={()=> handleEdit(task)}>Edit</button>
                            <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </main>
  )
}

export default Tasks