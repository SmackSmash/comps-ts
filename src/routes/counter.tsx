import { createFileRoute } from '@tanstack/react-router';
import Counter from '../components/Counter';

function RouteComponent() {
  return <Counter />;
}

export const Route = createFileRoute('/counter')({
  component: RouteComponent
});
