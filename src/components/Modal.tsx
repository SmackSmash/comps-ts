import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

const Modal: FC<{ onClick: () => void }> = ({ onClick }) => {
  return createPortal(
    <motion.div
      exit={{ opacity: 0 }}
      onClick={onClick}
      className='absolute top-0 left-0 flex min-h-full min-w-full items-center justify-center bg-slate-900/75'
    >
      Modal component
    </motion.div>,
    document.body
  );
};

export default Modal;
