import './App.css';
import Order from './Order.tsx';
import React, { useState } from 'react';

function Menu() {
  // Initial items
  const initialItems = [
    { id: 1, name: "Pizza, $6", price: 6},
    { id: 2, name: "Soda, $3", price: 3},
    { id: 3, name: "Fries, $7", price: 7},
    { id: 4, name: "Salad, $5", price: 5},
    { id: 5, name: "Chez, $2", price: 2},
    { id: 6, name: "Dogg, $9", price: 9},
    { id: 7, name: "Pasta, $8", price: 8},
    { id: 8, name: "Garlic, $1", price: 1},
    { id: 9, name: "Micro, $2", price: 2},
  ];

  // Quantities state
  const [quantities, setQuantities] = useState(
    initialItems.reduce((acc, item) => ({ ...acc, [item.id]: [0, item.price] }), {})
  );

  const[orderPage, setOrderPage] = useState("");

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: [Math.min(prev[id][0] + 1, 9), prev[id][1]] }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: [Math.max(prev[id][0] - 1, 0), prev[id][1]] }));
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
                value={quantities[item.id][0]}
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
      <button type="button" className="btn btn-primary" id="orderButton" onClick={() => {setOrderPage("Order")}}>
        Order
      </button>
      <div>
        {orderPage === "Order" && <Order orders={quantities} initialItems={initialItems}/>}
      </div>
    </>
  );
}

export default Menu;
