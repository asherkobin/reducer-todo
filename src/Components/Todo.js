import React from "react";

const Todo = ({todoItem, toggleTodo}) => {
  const notCompletedStyle = {
  };

  const completedStyle = {
    textDecoration: "line-through"
  }
  
  const handleClick = e => {
    toggleTodo(todoItem);
  }

  return (
    <div onClick={handleClick} style={todoItem.completed ? completedStyle : notCompletedStyle}>{todoItem.text}</div>
  )
};

export default Todo;