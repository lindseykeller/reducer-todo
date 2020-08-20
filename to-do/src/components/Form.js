import React, { useState, useReducer} from "react";
import {toDoReducer} from "../reducers/toDoReducer.js";

const Form = ( ) => {
    const [text, setText] = useState();
    const [{ todos, todoCount }, dispatch] = useReducer(toDoReducer, {
        todos: [],
        todoCount: 0,
      });
return (
    <>
    <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add to do"
        />
      </form>
      <div>number of todos: {todoCount}</div>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{
            textDecoration: t.completed ? "line-through" : "",
          }}
        >
          {t.text}
        </div>
      ))}
      <button onClick={() => dispatch({ type: "CLEAR TASK" })}>Clear</button>
      </>
)

}

export default Form;