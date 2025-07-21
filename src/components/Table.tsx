import { useState, type JSX } from 'react';

const Table = <T,>({
  data,
  config
}: {
  data: T[];
  config: Array<{
    label: string;
    render: (row: T) => JSX.Element | string | number;
    sortFn?: (a: T, b: T) => number;
  }>;
}) => {
  const [state, setState] = useState(data);

  return (
    <table>
      <thead className='bg-cyan-300 text-cyan-950'>
        <tr>
          {config.map(({ label, sortFn }, index) =>
            sortFn ? (
              <th
                key={index}
                onClick={() => setState([...state].sort(sortFn))}
                className='cursor-pointer p-2 text-left'
              >
                {label}
              </th>
            ) : (
              <th key={index} className='p-2 text-left'>
                {label}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody className='bg-cyan-900'>
        {state.map((row, index) => (
          <tr key={index} className={index < data.length - 1 ? 'border-b-2' : ''}>
            {config.map((element, index) => (
              <td key={index} className='p-2'>
                {element.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
