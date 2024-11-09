export interface ApiTodo {
  task: string;
  isDone: boolean;
}

export interface Todo extends ApiTodo {
  id: string;
}

export interface ApiTodos {
  [id: string]: ApiTodo;
}

export interface ChangeTodoStatus {
  id: string;
  isDone: boolean;
}