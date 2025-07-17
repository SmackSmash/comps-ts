import { createFileRoute } from '@tanstack/react-router';
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

const RouteComponent = () => {
  const [selection, setSelection] = useState<string | number | null>(null);

  const handleSelect = (value: string | number) => {
    setSelection(value);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ];

  return (
    <div className='flex gap-2 p-2'>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export const Route = createFileRoute('/dropdown')({
  component: RouteComponent
});
