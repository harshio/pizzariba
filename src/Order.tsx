import './App.css';
import React, { useState } from 'react';

interface Props {
    orders: Record<number, [number, number]>;
}

function Order({orders}: Props) {
    let totalSum = 0;
    for (const id in orders) {
        const [quantity, price] = orders[Number(id)]; //Note that for each id, we have the quantity ordered and its price. Furthermore, we have another data structure in Menu.tsx that maps food name to id. Perhaps when we implement backend functionality here, we could begin by making it so you have to pass in a second JSON object in component 'call's so that Menu can pass in initialItems, and we can use that to come up with the full order description.
        totalSum += quantity * price;
    }
    return (
        <h3>Your order is ${totalSum}.00</h3>
    );
}

export default Order;