import { useState, type FC } from 'react';

const Accordion: FC<{ items: { label: string; content: string }[] }> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map(({ label, content }, index) => (
        <div key={index}>
          <h1 onClick={() => setExpandedIndex(index)}>{label}</h1>
          {index === expandedIndex && <p>{content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
