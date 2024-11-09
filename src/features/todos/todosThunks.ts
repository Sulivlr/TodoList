import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiTodo, ApiTodos, ChangeTodoStatus, Todo} from '../../types';
import axiosApi from '../../axiosApi';

export const createTodoThunk = createAsyncThunk<void, ApiTodo>('todos/create', async (apiTodo) => {
  await axiosApi.post('/todos.json', apiTodo);
});

export const fetchTodoThunk = createAsyncThunk<Todo[]>('todos/fetch', async () => {
  const {data: todos} = await axiosApi.get<ApiTodos | null>('/todos.json');
  if (todos === null) {
    return [];
  }

  return Object.keys(todos).map((id) => ({
    id,
    ...todos[id],
  }));
});

export const changeTodoStatus = createAsyncThunk<void, ChangeTodoStatus>('todos/change', async ({id,isDone}) => {
  await axiosApi.patch(`/todos/${id}.json`, {isDone});
});

export const deleteTodoThunk = createAsyncThunk<void, string>('todo/remove', async (id) => {
  await axiosApi.delete(`/todos/${id}.json`);
});