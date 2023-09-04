import { useEffect, useState } from 'react';
import CarNumber from './layout/CarNumber';
import { useSelector } from 'react-redux';

function App() {

  const { number } = useSelector(state => state.carNumber);

  console.log(number);

  return (
    <div className="main_wrapper">
      <CarNumber/>
    </div>
  );
}

export default App;
