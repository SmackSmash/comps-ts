import type { FC } from 'react';
import { createPortal } from 'react-dom';

const Modal: FC = () => {
  return createPortal(
    <div className='absolute top-0 left-0 flex min-h-full min-w-full items-center justify-center bg-slate-900/75'>
      Modal component
    </div>,
    document.body
  );
};

export default Modal;
