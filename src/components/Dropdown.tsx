import { useState, type FC } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';
import type { Option } from '../types';

const Dropdown: FC<{
  options: Array<Option>;
  selection: Option | null;
  onSelect: (option: Option) => void;
}> = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setIsOpen(!isOpen);
    onSelect(option);
  };

  return (
    <div className='flex w-full flex-col gap-2'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex cursor-pointer items-center bg-cyan-800 px-4 py-2'
      >
        {selection ? selection.label : 'Select...'}
        <IoCaretDownSharp className='ml-auto' />
      </div>
      {isOpen &&
        options.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className='cursor-pointer bg-cyan-600 px-4 py-2'
            >
              {option.label}
            </div>
          );
        })}
    </div>
  );
};

export default Dropdown;
