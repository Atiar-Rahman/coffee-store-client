
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './Components/CoffeeCards';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-20">
      <h1 className="text-6xl text-center">
        Hot Hot Cold Coffees: {coffees.length}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
        {coffees.map((coffee) => (
          <CoffeeCards
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCards>
        ))}
      </div>
    </div>
  );
}

export default App
