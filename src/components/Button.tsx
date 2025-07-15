import type { FC, ReactNode } from 'react';

type style = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

const Button: FC<{
  style: style;
  outline?: boolean;
  rounded?: boolean;
  children: ReactNode;
}> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
