import { createFileRoute } from '@tanstack/react-router';
import Table from '../components/Table';

const RouteComponent = () => {
  return <Table />;
};

export const Route = createFileRoute('/table')({
  component: RouteComponent
});
