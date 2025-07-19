import { useEffect, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

const Modal: FC<{ onClose: () => void; children: ReactNode }> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className='fixed top-0 left-0 flex min-h-full min-w-full items-center justify-center bg-slate-900/75'
    >
      <div
        onClick={e => e.stopPropagation()}
        className='flex h-40 w-2/3 flex-col items-center justify-center gap-5 rounded bg-cyan-200 p-2 text-cyan-950'
      >
        {children}
      </div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
