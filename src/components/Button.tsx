import type { FC, ReactNode } from 'react';

const Button: FC<{
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  children: ReactNode;
}> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
