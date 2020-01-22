import React from "react";
import Todo from "./Todo";

const TodoList = ({todoList, toggleTodo, addTodo, clearCompleted}) => {
  const handleAdd = e => {
    addTodo(document.getElementById("todoText").value);
    document.getElementById("todoText").value = "";
  };

  const handleClearCompleted = e => {
    clearCompleted();
  };
  
  return (
    <div>
      {
        todoList.map(todoItem => <Todo todoItem={todoItem} key={todoItem.id} toggleTodo={toggleTodo} />)
      }
      <input type="text" name="todoText" id="todoText" />
      <button onClick={handleAdd}>Add Todo</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoList