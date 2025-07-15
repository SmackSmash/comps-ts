import type { FC, ReactNode } from 'react';

const Button: FC<{
  style?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  outline?: boolean;
  rounded?: boolean;
  children: ReactNode;
}> = ({ children }) => {
  return (
    <button className='cursor-pointer border-4 border-black bg-white px-4 py-2 text-black'>
      {children}
    </button>
  );
};

export default Button;
