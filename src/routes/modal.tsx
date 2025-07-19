import { createFileRoute } from '@tanstack/react-router';
import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';

const RouteComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Button onClick={handleClick}>Show Modal</Button>
      {showModal && <Modal onClick={handleClick} />}
    </div>
  );
};

export const Route = createFileRoute('/modal')({
  component: RouteComponent
});
