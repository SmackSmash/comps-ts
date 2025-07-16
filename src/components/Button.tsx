import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Button: FC<{
  className?: string;
  style?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  outline?: boolean;
  rounded?: boolean;
  children: ReactNode;
  [x: string]: unknown;
}> = ({ className, style, outline, rounded, children, ...rest }) => {
  console.log(className);
  const defaultStyles =
    'flex items-center gap-2 cursor-pointer border-4 border-black bg-white px-4 py-2 text-black transition duration-50 hover:scale-[1.05] active:scale-100';
  let computedStyles = className || '';

  switch (style) {
    case 'primary':
      computedStyles = twMerge(
        computedStyles,
        defaultStyles,
        'bg-blue-500 border-blue-900 text-blue-50'
      );
      break;
    case 'secondary':
      computedStyles = twMerge(
        computedStyles,
        defaultStyles,
        'bg-slate-500 border-slate-900 text-slate-50'
      );
      break;
    case 'success':
      computedStyles = twMerge(
        computedStyles,
        defaultStyles,
        'bg-green-500 border-green-900 text-green-50'
      );
      break;
    case 'warning':
      computedStyles = twMerge(
        computedStyles,
        defaultStyles,
        'bg-amber-500 border-amber-900 text-amber-50'
      );
      break;
    case 'danger':
      computedStyles = twMerge(
        computedStyles,
        defaultStyles,
        'bg-red-500 border-red-900 text-red-50'
      );
      break;
    default:
      computedStyles = twMerge(computedStyles, defaultStyles);
  }

  if (outline) computedStyles = twMerge(computedStyles, 'bg-white text-black');

  if (rounded) computedStyles = twMerge(computedStyles, 'rounded-full');

  return (
    <button {...rest} className={computedStyles}>
      {children}
    </button>
  );
};

export default Button;
