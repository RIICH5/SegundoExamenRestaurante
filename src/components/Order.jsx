import React from 'react';

const Order = ({ order, total, handlePayment }) => {
  return (
    <div>
      <h2>Tu Orden</h2>
      {order.length === 0 ? (
        <p>No has agregado ningún platillo aún.</p>
      ) : (
        <ul>
          {order.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ${total}</h3>

      {order.length > 0 && (
        <button onClick={handlePayment}>Pagar</button>
      )}
    </div>
  );
};

export default Order;
