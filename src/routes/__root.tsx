import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import NotFound from '../components/NotFound';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='flex gap-2 p-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>{' '}
        <Link to='/buttons' className='[&.active]:font-bold'>
          Buttons
        </Link>
        <Link to='/accordion' className='[&.active]:font-bold'>
          Accordion
        </Link>
        <Link to='/dropdown' className='[&.active]:font-bold'>
          Dropdown
        </Link>
        <Link to='/modal' className='[&.active]:font-bold'>
          Modal
        </Link>
        <Link to='/table' className='[&.active]:font-bold'>
          Table
        </Link>
      </div>
      <hr />
      <div className='flex gap-2 p-2'>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: NotFound
});
