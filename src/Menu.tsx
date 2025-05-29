import './App.css';
import React, { useState } from 'react';

function Menu() {
  // Initial items
  const initialItems = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Soda" },
    { id: 3, name: "Fries" },
    { id: 4, name: "Salad" },
    { id: 5, name: "Cheese" },
    { id: 6, name: "Coleslaw" },
    { id: 7, name: "Pasta" },
    { id: 8, name: "Garlic" },
    { id: 9, name: "Lasagna" },
  ];

  // Quantities state
  const [quantities, setQuantities] = useState(
    initialItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.min(prev[id] + 1, 9) }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 0) }));
  };

  return (
    <>
      <h2>Menu</h2>
      <p>-----------------------</p>
      <div className="menu-container">
        {initialItems.map((item) => (
          <div key={item.id} className="special">
            <h3>{item.name}</h3>
            <div className="input-group">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => handleDecrement(item.id)}
              >
                -
              </button>
              <input
                type="number"
                className="form-control text-center"
                value={quantities[item.id]}
                min="0"
                max="9"
                readOnly
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-primary" id="orderButton">
        Order
      </button>
    </>
  );
}

export default Menu;
