import { createFileRoute } from '@tanstack/react-router';
import Button from '../components/Button';

const Buttons = () => {
  return (
    <div className='p-2'>
      <Button style='primary'>Button</Button>
    </div>
  );
};

export const Route = createFileRoute('/buttons')({
  component: Buttons
});
