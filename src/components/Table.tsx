import type { FC, JSX } from 'react';
import type { Fruit } from '../types';

const Table: FC<{
  data: Fruit[];
  config: Array<{ label: string; render: (fruit: Fruit) => string | number | JSX.Element }>;
}> = ({ data, config }) => {
  return (
    <table>
      <thead className='bg-cyan-300 text-cyan-950'>
        <tr>
          {config.map(({ label }, index) => (
            <th key={index} className='p-2 text-left'>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='bg-cyan-900'>
        {data.map((fruit, index) => (
          <tr key={index} className={index < data.length - 1 ? 'border-b-2' : ''}>
            {config.map(element => (
              <td className='p-2'>{element.render(fruit)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
