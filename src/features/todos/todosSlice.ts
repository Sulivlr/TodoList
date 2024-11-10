import {Todo} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {createTodoThunk, deleteTodoThunk, fetchTodoThunk} from './todosThunks';

interface TodosState {
  items: Todo[]
  isFetching: boolean;
  isCreating: boolean;
  isRemoving: string | null;
}

const initialState: TodosState = {
  items: [],
  isFetching: false,
  isCreating: false,
  isRemoving: null,
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
    }).addCase(deleteTodoThunk.pending, (state, {meta: {arg: id}}) => {
      state.isRemoving = id;
    }).addCase(deleteTodoThunk.fulfilled, (state) => {
      state.isRemoving = null;
    }).addCase(deleteTodoThunk.rejected, (state) => {
      state.isRemoving = null;
    });
  },
  selectors: {
    selectIsCreating: (state) => state.isCreating,
    selectIsFetching: (state) => state.isFetching,
    selectTodos: (state) => state.items,
    selectRemoving: (state) => state.isRemoving,
  }
});

export const todosReducer = todosSlice.reducer;
export const
  {
    selectIsCreating,
    selectIsFetching,
    selectTodos,
    selectRemoving,
  } = todosSlice.selectors;