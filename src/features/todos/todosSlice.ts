import {Todo} from '../../types';
import {createSlice} from '@reduxjs/toolkit';

interface TodosState {
  items: Todo[]
  isFetching: boolean;
}

const initialState: TodosState = {
  items: [],
  isFetching: false,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

  }
});

export const todosReducer = todosSlice.reducer;