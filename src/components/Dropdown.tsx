import { useState, type FC } from 'react';

const Dropdown: FC<{ options: Array<{ label: string | number; value: string | number }> }> = ({
  options
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>('Select...');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string | number) => {
    setIsOpen(!isOpen);
    setSelectedValue(value);
    console.log(selectedValue);
  };

  return (
    <div className='flex w-full flex-col'>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer bg-cyan-800 px-4 py-2'>
        {selectedValue}
      </div>
      {isOpen &&
        options.map(({ label, value }, index) => {
          return (
            <div key={index} onClick={() => handleOptionClick(value)} className='cursor-pointer'>
              {label}
            </div>
          );
        })}
    </div>
  );
};

export default Dropdown;
