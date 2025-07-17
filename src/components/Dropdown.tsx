import { useState, type FC } from 'react';
import { IoCaretDownSharp } from 'react-icons/io5';

type Option = { label: string | number; value: string | number };

const Dropdown: FC<{ options: Array<Option> }> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setIsOpen(!isOpen);
    setSelectedOption(option);
  };

  return (
    <div className='flex w-full flex-col'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='flex cursor-pointer items-center bg-cyan-800 px-4 py-2'
      >
        {selectedOption ? selectedOption.label : 'Select...'}
        <IoCaretDownSharp className='ml-auto' />
      </div>
      {isOpen &&
        options.map((option, index) => {
          return (
            <div key={index} onClick={() => handleOptionClick(option)} className='cursor-pointer'>
              {option.label}
            </div>
          );
        })}
    </div>
  );
};

export default Dropdown;
