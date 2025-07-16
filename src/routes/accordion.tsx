import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return <div>Hello "/accordion"!</div>;
};

export const Route = createFileRoute('/accordion')({
  component: RouteComponent
});
