import { createFileRoute } from '@tanstack/react-router';
import Accordion from '../components/Accordion';

const RouteComponent = () => {
  const accordionItems = [
    {
      label: 'Accordion 1',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas esse minima, quo temporibus laborum reprehenderit, eaque sunt minus expedita accusantium velit quasi odio consequatur dolorum aperiam vitae nemo. Dicta, nostrum!'
    },
    {
      label: 'Accordion 2',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere at esse, culpa rem reprehenderit illum explicabo. Cumque libero voluptas, optio magni dolorem fugit ratione modi dolores et quas dolore recusandae!'
    },
    {
      label: 'Accordion 3',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad maxime aliquam illo, voluptas rem illum soluta alias cupiditate optio adipisci sed deserunt minima fuga saepe, dicta aliquid dolore repellat atque!'
    }
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
