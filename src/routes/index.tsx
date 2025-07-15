import { createFileRoute } from '@tanstack/react-router';

const Index = () => {
  return (
    <div className='p-2'>
      <h1>I will be creating lot's of different components with differing functions</h1>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Index
});
