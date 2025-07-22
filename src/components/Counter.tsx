import { useEffect, useState, type FC } from 'react';
import Button from './Button';

const Counter: FC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='mt-2 flex flex-col items-center gap-4 rounded-2xl bg-cyan-600 p-4'>
      <div className='text-5xl font-bold'>{count}</div>
      <Button style='success' rounded onClick={incrementCount}>
        Increment
      </Button>
    </div>
  );
};

export default Counter;
