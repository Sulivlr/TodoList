import React, {useState} from 'react';
import {createTodoThunk, fetchTodoThunk} from '../todosThunks';
import ButtonSpinner from '../../../components/Spinner/ButtonSpinner';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {selectIsCreating} from '../todosSlice';

const TodoForm = () => {

  const [task, setTask] = useState('');
  const isCreating = useAppSelector(selectIsCreating);
  const dispatch = useAppDispatch();
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(createTodoThunk({
      task,
      isDone: false,
    }));
    setTask('');
    dispatch(fetchTodoThunk());
  };

  return (
    <form className="d-flex flex-row gap-2" onSubmit={onSubmit}>
      <input
        className="form-control"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        disabled={isCreating}
        type="submit"
        className="btn btn-primary"
      >
        {isCreating && <ButtonSpinner />}
        Create
      </button>
    </form>
  );
};

export default TodoForm;