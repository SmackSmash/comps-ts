import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return <div>Hello "/table"!</div>;
};

export const Route = createFileRoute('/table')({
  component: RouteComponent
});
