import React, { useReducer } from 'react';
import './App.css';
import TodoList from "./Components/TodoList";

const initialState = [
{
  text: "Wash Dog",
  completed: false,
  id: 1
},
{
  text: "Buy Picture Frames",
  completed: false,
  id: 2
}];

const todoReducer = ((todoList, todoAction) => {
  switch (todoAction.type) {
    case "ADD_TODO":
      return [...todoList, { text: todoAction.payload, completed: false, id: Date.now() }];
    case "TOGGLE_TODO":
      return todoList.map(todoItem => {
        if (todoItem.id === todoAction.payload.id) {
          todoItem.completed = !todoItem.completed;
        }
        return todoItem;
      });
    case "CLEAR_COMPLETED_TODOS":
      return todoList.filter(todoItem => !todoItem.completed);
    default:
      break;
  }
});

function App() {
  const [todoList, dispatchTodo] = useReducer(todoReducer, initialState);

  return (
    <TodoList
      todoList={todoList} 
      toggleTodo={(todoToToggle) => dispatchTodo({ type: "TOGGLE_TODO", payload: todoToToggle })}
      addTodo={(newTodo) => dispatchTodo({ type: "ADD_TODO", payload: newTodo })}
      clearCompleted={() => dispatchTodo({ type: "CLEAR_COMPLETED_TODOS" })} />
  );
}

export default App;
