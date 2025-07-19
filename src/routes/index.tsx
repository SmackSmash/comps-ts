import { createFileRoute } from '@tanstack/react-router';

const Index = () => {
  return <h1>I will be creating lot's of different components with differing functions</h1>;
};

export const Route = createFileRoute('/')({
  component: Index
});
