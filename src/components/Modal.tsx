import type { FC, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

const Modal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log('Clicked inside modal!');
  };

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className='absolute top-0 left-0 flex min-h-full min-w-full items-center justify-center bg-slate-900/75'
    >
      <div
        onClick={handleClick}
        className='flex h-40 w-2/3 items-center justify-center rounded bg-cyan-200 p-2 text-cyan-950'
      >
        Modal Component!
      </div>
    </motion.div>,
    document.body
  );
};

export default Modal;
