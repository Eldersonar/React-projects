import React from 'react'

export default function Task({ task, toggleTasks }) {

    function handleTaskClick() {
        toggleTasks(task.id)
    }

    return (
        <div>
            <label></label>
            <input type="checkbox" checked={task.complete} onChange={handleTaskClick} />
            {task.name}
        </div>
    )
}
