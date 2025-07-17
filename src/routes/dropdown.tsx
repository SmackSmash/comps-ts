import { createFileRoute } from '@tanstack/react-router';
import Dropdown from '../components/Dropdown';
import { useState } from 'react';
import type { Option } from '../types';

const RouteComponent = () => {
  const [selection, setSelection] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ];

  return (
    <div className='p-2'>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <p>Cover me please!</p>
    </div>
  );
};

export const Route = createFileRoute('/dropdown')({
  component: RouteComponent
});
