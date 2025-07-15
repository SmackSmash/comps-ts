import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Button: FC<{
  style?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  outline?: boolean;
  rounded?: boolean;
  children: ReactNode;
}> = ({ style, children }) => {
  const defaultStyles = 'cursor-pointer border-4 border-black bg-white px-4 py-2 text-black';
  let computedStyles = '';

  switch (style) {
    case 'primary':
      computedStyles = twMerge(defaultStyles, 'bg-blue-500 border-blue-900 text-blue-50');
      break;
    case 'secondary':
      computedStyles = twMerge(defaultStyles, 'bg-slate-500 border-slate-900 text-slate-50');
      break;
    case 'success':
      computedStyles = twMerge(defaultStyles, 'bg-green-500 border-green-900 text-green-50');
      break;
    case 'warning':
      computedStyles = twMerge(defaultStyles, 'bg-amber-500 border-amber-900 text-amber-50');
      break;
    case 'danger':
      computedStyles = twMerge(defaultStyles, 'bg-red-500 border-red-900 text-red-50');
      break;
    default:
      computedStyles = defaultStyles;
  }

  return <button className={computedStyles}>{children}</button>;
};

export default Button;
