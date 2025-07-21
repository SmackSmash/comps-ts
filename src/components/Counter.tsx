import type { FC } from 'react';

const Counter: FC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  return <div>{initialCount}</div>;
};

export default Counter;
