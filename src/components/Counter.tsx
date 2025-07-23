import { useReducer, type ChangeEvent, type FC, type FormEvent } from 'react';
import Button from './Button';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'change-value':
      return { ...state, addValue: action.payload };
    case 'add-value':
      return { count: state.count + action.payload, addValue: 0 };
    default:
      return state;
  }
};

const Counter: FC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    addValue: 0
  });

  const incrementCount = () => {
    dispatch({ type: 'increment' });
  };

  const decrementCount = () => {
    dispatch({ type: 'decrement' });
  };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'change-value', payload: Number(value) });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'add-value', payload: Number(state.addValue) });
  };

  return (
    <div className='mt-2 flex flex-col items-center gap-4 rounded-2xl bg-cyan-600 p-4'>
      <div className='text-5xl font-bold'>{state.count}</div>
      <div className='flex gap-2'>
        <Button style='success' rounded onClick={incrementCount}>
          Increment
        </Button>
        <Button style='danger' rounded onClick={decrementCount}>
          Decrement
        </Button>
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 rounded-2xl bg-cyan-200 p-4 text-cyan-950'
      >
        <label htmlFor='add'>Add a lot</label>
        <input
          type='number'
          name='add'
          id='add'
          value={state.addValue || ''}
          onChange={handleChange}
          className='rounded-2xl bg-cyan-50 px-4 py-2 outline-0'
        />
        <Button style='primary' rounded>
          Add
        </Button>
      </form>
    </div>
  );
};

export default Counter;
