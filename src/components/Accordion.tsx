import { useState, type FC } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Accordion: FC<{ items: { label: string; content: string }[] }> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) =>
    index === expandedIndex ? setExpandedIndex(null) : setExpandedIndex(index);

  return (
    <div className='flex w-full flex-col gap-1'>
      {items.map(({ label, content }, index) => (
        <div key={index}>
          <h1
            onClick={() => handleClick(index)}
            className='flex cursor-pointer items-center rounded bg-cyan-200 px-4 py-2 text-cyan-900'
          >
            {label}
            {index === expandedIndex ? (
              <IoIosArrowUp className='ml-auto' />
            ) : (
              <IoIosArrowDown className='ml-auto' />
            )}
          </h1>
          {index === expandedIndex && <p className='p-4'>{content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
