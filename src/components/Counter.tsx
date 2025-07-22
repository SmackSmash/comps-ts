import { useState, type ChangeEvent, type FC, type FormEvent } from 'react';
import Button from './Button';

const Counter: FC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [addValue, setAddValue] = useState('');

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount(count + Number(addValue));
    setAddValue('');
  };

  return (
    <div className='mt-2 flex flex-col items-center gap-4 rounded-2xl bg-cyan-600 p-4'>
      <div className='text-5xl font-bold'>{count}</div>
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
          value={addValue}
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
