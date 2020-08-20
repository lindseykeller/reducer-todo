export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount,
      };
    case "CLEAR TASK":
      return {
        todos: state.todos.filter((item) => !item.completed),
      };
    default:
      return state;
  }
};
