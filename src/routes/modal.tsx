import { createFileRoute } from '@tanstack/react-router';
import Modal from '../components/Modal';

const RouteComponent = () => {
  return (
    <div>
      <Modal />
    </div>
  );
};

export const Route = createFileRoute('/modal')({
  component: RouteComponent
});
