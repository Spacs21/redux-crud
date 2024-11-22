import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || []

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({id: Date.now(), ...action.payload})
            localStorage.setItem("tasks", JSON.stringify(state))
        },
        updateTask: (state, action) => {
            const { id, title, completed } = action.payload
            const task = state.find((task) => task.id === id)
            if(task) {
                task.title = title
                task.completed
                localStorage.setItem("tasks", JSON.stringify(state))
            }
        },
        deleteTask: (state, action) => {
            const updatedState = state.filter((task) => task.id !== action.payload)
            localStorage.setItem("tasks", JSON.stringify(updatedState))
            return updatedState
        }
    }
})

export const { addTask, updateTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer