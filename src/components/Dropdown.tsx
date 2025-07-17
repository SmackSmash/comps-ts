import { useEffect, useRef, useState, type FC } from 'react';
import { IoCaretDownSharp, IoCaretUpSharp } from 'react-icons/io5';
import type { Option } from '../types';

const Dropdown: FC<{
  options: Array<Option>;
  value: Option | null;
  onChange: (option: Option) => void;
}> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectHeight, setSelectHeight] = useState(0);

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectHeight(selectRef!.current!.clientHeight);
  }, [selectHeight]);

  const handleOptionClick = (option: Option) => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  return (
    <div onBlur={() => console.log('Clicked outside')} className='relative flex w-full flex-col'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        ref={selectRef}
        className='flex cursor-pointer items-center bg-cyan-800 px-4 py-4'
      >
        {value ? value.label : 'Select...'}
        {isOpen ? <IoCaretUpSharp className='ml-auto' /> : <IoCaretDownSharp className='ml-auto' />}
      </div>
      <div style={{ top: `${selectHeight}px` }} className='absolute w-full'>
        {isOpen &&
          options.map((option, index) => {
            return (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className='w-full cursor-pointer border-b-1 border-cyan-200 bg-cyan-600 px-4 py-2 last-of-type:border-0'
              >
                {option.label}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
