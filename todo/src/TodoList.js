import React from 'react'
import Task from './Task'

export default function TodoList({ tasks, toggleTasks }) {
    return (
        tasks.map(task => {
            return <Task key={task.id} toggleTasks={toggleTasks} task={task} />
        })
    )
}
