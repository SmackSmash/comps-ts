import type { FC } from 'react';
import type { Fruit } from '../types';

const Table: FC<{ data: Fruit[]; config: Array<{ label: string }> }> = ({ data, config }) => {
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
      <tbody>
        {data.map(({ name, color, score }, index) => (
          <tr key={index} className={index < data.length - 1 ? 'border-b-2' : ''}>
            <td className='p-2'>{name}</td>
            <td className='p-2'>
              <div className={`${color} h-5 w-5`}></div>
            </td>
            <td className='p-2'>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
