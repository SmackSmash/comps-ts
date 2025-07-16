import { createFileRoute } from '@tanstack/react-router';
import Accordion from '../components/Accordion';

const RouteComponent = () => {
  const accordionItems = [
    { title: 'Accordion 1', content: 'Accordion 1 content' },
    { title: 'Accordion 2', content: 'Accordion 2 content' },
    { title: 'Accordion 3', content: 'Accordion 3 content' }
  ];

  return (
    <div className='flex gap-2 p-2'>
      <Accordion items={accordionItems} />
    </div>
  );
};

export const Route = createFileRoute('/accordion')({
  component: RouteComponent
});
