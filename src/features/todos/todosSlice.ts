import {Todo} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {createTodoThunk, fetchTodoThunk} from './todosThunks';

interface TodosState {
  items: Todo[]
  isFetching: boolean;
  isCreating: boolean;
}

const initialState: TodosState = {
  items: [],
  isFetching: false,
  isCreating: false,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTodoThunk.pending, (state) => {
      state.isCreating = true;
    }).addCase(createTodoThunk.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createTodoThunk.rejected, (state) => {
      state.isCreating = false;
    }).addCase(fetchTodoThunk.pending, (state) => {
      state.isFetching = true;
    }).addCase(fetchTodoThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.items = action.payload;
    }).addCase(fetchTodoThunk.rejected, (state) => {
      state.isFetching = false;
    });
  },
  selectors: {
    selectIsCreating: (state) => state.isCreating,
    selectIsFetching: (state) => state.isFetching,
    selectTodos: (state) => state.items,
  }
});

export const todosReducer = todosSlice.reducer;
export const
  {
    selectIsCreating,
    selectIsFetching,
    selectTodos,
  } = todosSlice.selectors;