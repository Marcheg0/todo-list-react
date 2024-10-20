import React from 'react';

function TaskList({ tasks, onRemoveTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ flex: 1}}>{task}</span>
                    <button onClick={() => onRemoveTask(index)}>X</button>
                </li>
            ))}
        </ul>        
    );
}       

export default TaskList;