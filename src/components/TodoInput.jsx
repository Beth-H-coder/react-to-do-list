import { useState } from "react";

export default function TodoInput({
  todos,
  handleAddTodos,
  todoValue,
  setTodoValue,
}) {
  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
