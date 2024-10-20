import React from "react";

function TaskList({ tasks, onRemoveTask, onEditTask, onSaveTask, editingIndex, editText, setEditText }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ display: "flex", alignItems: "center" }}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                style={{ flex: 1 }}
              />
              <button onClick={() => onSaveTask(index)}>Зберегти</button>
            </>
          ) : (
            <>
              <span style={{ flex: 1 }}>{task}</span>
              <button onClick={() => onEditTask(index)}>Редагувати</button>
              <button onClick={() => onRemoveTask(index)}>Видалити</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
