import TodoForm from './components/TodoForm';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectIsFetching, selectRemoving, selectTodos} from './todosSlice';
import {useEffect} from 'react';
import {changeTodoStatus, deleteTodoThunk, fetchTodoThunk} from './todosThunks';
import Spinner from '../../components/Spinner/Spinner';
import ButtonSpinner from '../../components/Spinner/ButtonSpinner';

const Todos = () => {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(selectIsFetching);
  const isRemoving = useAppSelector(selectRemoving);
  const todos = useAppSelector(selectTodos)

  useEffect(() => {
    dispatch(fetchTodoThunk());
  }, [dispatch]);

  const onChangeStatus = (id: string, isDone: boolean) => {
    dispatch(changeTodoStatus({
      id,
      isDone: isDone,
    }));
    dispatch(fetchTodoThunk());
  };

  const onRemove = async (id: string) => {
   await dispatch(deleteTodoThunk(id));
   await dispatch(fetchTodoThunk());
  };

  return (
    <div className="d-flex flex-column mt-3">
      <TodoForm/>
      {isFetching ? (<Spinner/>) : todos.map((todo) => (
        <div className="card mt-3">
          <div className="card-body d-flex justify-content-between">
            <div key={todo.id}>
              <h3 className="p-1">{todo.task}</h3>
            </div>
            <div className="d-flex flex-row align-items-center">
              <input
                style={{width: '30px', height: '30px'}}
                type="checkbox"
                className="form-check-input me-5"
                defaultChecked={todo.isDone}
                onChange={event => onChangeStatus(todo.id, event.target.checked)}
              />
              {isRemoving && <ButtonSpinner />}
              <button
                className="btn btn-close btn-outline-danger"
                style={{width: '50px', height: '50px'}}
                onClick={() => onRemove(todo.id)}
              ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;