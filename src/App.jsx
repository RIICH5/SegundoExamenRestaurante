import React, { useState } from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import PaymentConfirmation from './components/PaymentConfirmation';
import './App.css';

const App = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentScreen, setCurrentScreen] = useState('menu');

  const addToOrder = (item) => {
    setOrder([...order, item]);
    setTotal(total + item.price);
  };

  const handlePayment = () => {
    setOrder([]);
    setTotal(0);
    setCurrentScreen('confirmation'); 
  };

  const changeScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="app-container">
      <nav>
        <button onClick={() => changeScreen('menu')}>Menú</button>
        <button onClick={() => changeScreen('order')}>Orden</button>
      </nav>

      {currentScreen === 'menu' && <Menu addToOrder={addToOrder} />}
      {currentScreen === 'order' && <Order order={order} total={total} handlePayment={handlePayment} />}
      {currentScreen === 'confirmation' && <PaymentConfirmation />}
    </div>
  );
};

export default App;
