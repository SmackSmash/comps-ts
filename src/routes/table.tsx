import { createFileRoute } from '@tanstack/react-router';
import Table from '../components/Table';
import type { Fruit, Car } from '../types';

const fruitData = [
  { name: 'Banana', color: 'bg-yellow-500', score: 10 },
  { name: 'Orange', color: 'bg-orange-500', score: 20 },
  { name: 'Apple', color: 'bg-green-500', score: 30 },
  { name: 'Mango', color: 'bg-red-500', score: 40 },
  { name: 'Pineapple', color: 'bg-purple-500', score: 50 },
  { name: 'Grape', color: 'bg-blue-500', score: 60 },
  { name: 'Watermelon', color: 'bg-pink-500', score: 70 },
  { name: 'Strawberry', color: 'bg-teal-500', score: 80 },
  { name: 'Blueberry', color: 'bg-cyan-500', score: 90 },
  { name: 'Blackberry', color: 'bg-gray-500', score: 100 }
];

const fruitConfig = [
  { label: 'Fruit', render: (fruit: Fruit) => fruit.name, sort: (a: string, b: string) => a < b },
  { label: 'Color', render: (fruit: Fruit) => <div className={`${fruit.color} h-4 w-4`}></div> },
  { label: 'Score', render: (fruit: Fruit) => fruit.score }
];

const carData = [
  { name: 'Volvo', price: 10000, discount: 0.1, desirable: true },
  { name: 'BMW', price: 20000, discount: 0.05, desirable: true },
  { name: 'Audi', price: 30000, discount: 0.2, desirable: false },
  { name: 'Mercedes', price: 40000, discount: 0.4, desirable: true },
  { name: 'Jaguar', price: 50000, discount: 0.15, desirable: true },
  { name: 'Bentley', price: 60000, discount: 0.05, desirable: false },
  { name: 'Toyota', price: 70000, discount: 0.3, desirable: true },
  { name: 'Lexus', price: 80000, discount: 0.2, desirable: false },
  { name: 'Honda', price: 90000, discount: 0.1, desirable: false },
  { name: 'Ford', price: 100000, discount: 0.1, desirable: true }
];

const carConfig = [
  { label: 'Name', render: (row: Car) => row.name },
  { label: 'Price', render: (row: Car) => `$${row.price.toLocaleString()}` },
  { label: 'Discount', render: (row: Car) => `$${Math.round(row.price * (1 - row.discount))}` },
  { label: 'Desirable', render: (row: Car) => (row.desirable ? 'Yes' : 'No') }
];

const RouteComponent = () => {
  return (
    <>
      <Table data={fruitData} config={fruitConfig} />
      <Table data={carData} config={carConfig} />
    </>
  );
};

export const Route = createFileRoute('/table')({
  component: RouteComponent
});
