import { createFileRoute } from '@tanstack/react-router';
import Counter from '../components/Counter';

function RouteComponent() {
  return <Counter initialCount={5} />;
}

export const Route = createFileRoute('/counter')({
  component: RouteComponent
});
