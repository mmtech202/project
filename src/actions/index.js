import {databaseRef} from '../firebase'
const FETCH_TODOS = 'FETCH_TODOS';

export const addToDo = newToDo => async dispatch => {
    databaseRef.push().set(newToDo);
};

export const completeToDo = completeToDo => async dispatch => {
    databaseRef.child(completeToDo).remove();
};

export const fetchToDos = () => async dispatch => {
    databaseRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};