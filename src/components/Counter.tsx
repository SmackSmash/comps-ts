import { useReducer, type ChangeEvent, type FC, type FormEvent } from 'react';
import { produce } from 'immer';
import Button from './Button';

type Action = 'INCREMENT' | 'DECREMENT' | 'CHANGE_VALUE' | 'ADD_VALUE';

const reducer = (
  state: {
    count: number;
    addValue: number;
  },
  action: {
    type: Action;
    payload?: number;
  }
) => {
  switch (action.type) {
    case 'INCREMENT':
      state.count = state.count + 1;
      return;
    case 'DECREMENT':
      state.count = state.count - 1;
      return;
    case 'CHANGE_VALUE':
      state.addValue = action.payload!;
      return;
    case 'ADD_VALUE':
      state.count = state.count + action.payload!;
      state.addValue = 0;
      return;
    default:
      return;
  }
};

const Counter: FC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    addValue: 0
  });

  const incrementCount = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementCount = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_VALUE', payload: Number(value) });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_VALUE', payload: Number(state.addValue) });
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
