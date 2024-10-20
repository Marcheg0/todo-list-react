import React, {useState} from 'react';

function AddTask({onAddTask}) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (task.trim() !== '') {
            onAddTask(task);
            setTask('');            
        }
    }; 

    return (
        <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a task"            
                style={{ marginRight: '10px' }}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );    
}    

export default AddTask; 