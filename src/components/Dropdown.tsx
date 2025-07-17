import { useState, type FC } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';
import type { Option } from '../types';

const Dropdown: FC<{
  options: Array<Option>;
  value: Option | null;
  onChange: (option: Option) => void;
}> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  return (
    <div className='flex w-full flex-col'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex cursor-pointer items-center rounded-t bg-cyan-800 px-4 py-2 last-of-type:rounded-b'
      >
        {value ? value.label : 'Select...'}
        <IoCaretDownSharp className='ml-auto' />
      </div>
      {isOpen &&
        options.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className='cursor-pointer border-b-1 border-cyan-200 bg-cyan-600 px-4 py-2 last-of-type:rounded-b last-of-type:border-0'
            >
              {option.label}
            </div>
          );
        })}
    </div>
  );
};

export default Dropdown;
