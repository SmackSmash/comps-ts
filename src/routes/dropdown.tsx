import { createFileRoute } from '@tanstack/react-router';
import Dropdown from '../components/Dropdown';

const RouteComponent = () => {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ];

  return (
    <div className='flex gap-2 p-2'>
      <Dropdown options={options} />
    </div>
  );
};

export const Route = createFileRoute('/dropdown')({
  component: RouteComponent
});
