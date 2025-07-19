import { createFileRoute } from '@tanstack/react-router';
import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';
import { AnimatePresence } from 'motion/react';

const RouteComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Button style='success' rounded onClick={handleClick}>
        Show Modal
      </Button>
      <AnimatePresence>
        {showModal && (
          <Modal key='modal' onClose={handleClick}>
            Some content for the modal
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Route = createFileRoute('/modal')({
  component: RouteComponent
});
