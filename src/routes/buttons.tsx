import { createFileRoute } from '@tanstack/react-router';
import Button from '../components/Button';

const Buttons = () => {
  return (
    <div className='flex p-2'>
      <div className='flex flex-col gap-2'>
        <Button>Button</Button>
        <Button style='primary'>Button</Button>
        <Button style='secondary'>Button</Button>
        <Button style='success'>Button</Button>
        <Button style='warning'>Button</Button>
        <Button style='danger'>Button</Button>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/buttons')({
  component: Buttons
});
