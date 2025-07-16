import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return <div>Hello "/dropdown"!</div>;
};

export const Route = createFileRoute('/dropdown')({
  component: RouteComponent
});
