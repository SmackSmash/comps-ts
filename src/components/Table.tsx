import type { FC } from 'react';
import type { Fruit } from '../types';

const Table: FC<{ data: Fruit[] }> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <td key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, color, score }, index) => (
          <tr key={index}>
            <td>{name}</td>
            <td>{color}</td>
            <td>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
