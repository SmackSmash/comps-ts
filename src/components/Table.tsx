import { useState, type JSX } from 'react';
import { FaSort } from 'react-icons/fa';

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
  const [sortedBy, setSortedBy] = useState<string | null>(null);

  const sortTable = (label: string, sortFn: (a: T, b: T) => number) => {
    if (sortedBy !== label) {
      setSortedBy(label);
      setState([...state].sort(sortFn));
    } else {
      setState([...state].reverse());
    }
  };

  return (
    <table className='overflow-hidden rounded'>
      <thead className='rounded-t bg-cyan-800 text-cyan-50'>
        <tr>
          {config.map(({ label, sortFn }, index) =>
            sortFn ? (
              <th
                key={index}
                onClick={() => sortTable(label, sortFn)}
                className='cursor-pointer p-2 text-left'
              >
                {label} <FaSort className='ml-auto inline-block' />
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
          <tr key={index} className={index < data.length - 1 ? 'border-b-2 border-b-cyan-800' : ''}>
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
