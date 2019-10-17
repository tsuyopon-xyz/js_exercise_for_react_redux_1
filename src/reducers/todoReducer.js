import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO_COMPLETED
} from '../actions/todoActionCreator';
import Todo from '../models/Todo';

/**
 *
 * @param {Array<Todo>} state
 * @param {Object} action
 */
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = new Todo(action.text);
      return [
        ...state,
        todo
      ];
    case DELETE_TODO:
      return state.filter((todo) => {
        return action.id !== todo.id;
      });
    case TOGGLE_TODO_COMPLETED:
      return state.map((todo) => {
        if (action.id === todo.id) {
          todo.toggle();
        }
        return todo;
      });
    default:
      return state;
  }
};

