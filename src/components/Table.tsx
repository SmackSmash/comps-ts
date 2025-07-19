import type { FC } from 'react';
import type { Fruit } from '../types';

const Table: FC<{ data: Fruit[] }> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <td key={index}>{key}</td>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Table;
