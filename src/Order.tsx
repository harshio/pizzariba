import './App.css';
import React, { useState } from 'react';

interface Props {
    orders: Record<number, [number, number]>;
}

function Order({orders}: Props) {
    let totalSum = 0;
    for (const id in orders) {
        const [quantity, price] = orders[Number(id)];
        totalSum += quantity * price;
    }
    return (
        <h3>Your order is ${totalSum}.00</h3>
    );
}

export default Order;