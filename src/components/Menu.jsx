import React, { useEffect, useState } from 'react';

const Menu = ({ addToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetch('https://api-menu-9b5g.onrender.com/menu')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener el menú');
        }
        return response.json();
      })
      .then((data) => {
        setMenuItems(data); // Guardamos los datos en el estado
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); // Guardamos el error si lo hay
        setLoading(false);
      });
  }, []); 

  
  if (loading) {
    return <div>Cargando menú...</div>;
  }

  // Si hay un error, mostramos un mensaje de error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Menú</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToOrder(item)}>Agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
