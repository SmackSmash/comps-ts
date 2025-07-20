import type { FC } from 'react';
import type { Fruit } from '../types';
import { twMerge } from 'tailwind-merge';

const Table: FC<{ data: Fruit[] }> = ({ data }) => {
  return (
    <table>
      <thead className='bg-cyan-300 text-cyan-950'>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <td key={index} className='p-2'>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, color, score }, index) => (
          <tr key={index} className={index < data.length - 1 ? 'border-b-2' : ''}>
            <td className='p-2'>{name}</td>
            <td className='p-2'>
              <div className={twMerge(color, 'h-5 w-5')}></div>
            </td>
            <td className='p-2'>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
