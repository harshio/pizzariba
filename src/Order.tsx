import './App.css';
import React, { useState, useEffect } from 'react';

interface Props {
    orders: Record<number, [number, number]>;
    initialItems: { id: number; name: string; price: number }[];
}

function Order({ orders, initialItems }: Props) {
    const [things, setThings] = useState<{ totalPrice: number } | null>(null);
    const [orderString, setOrderString] = useState("");

    useEffect(() => {
        let totalSum = 0;
        let orderStr = "";

        for (const id in orders) {
            const [quantity, price] = orders[Number(id)];
            const item = initialItems.find(item => item.id === Number(id));
            const foodName = item ? item.name.split(",")[0] : "Unknown Item";
            totalSum += quantity * price;
            if (quantity !== 0) {
                orderStr += `${quantity} ${foodName}. `;
            }
        }

        setOrderString(orderStr);

        const data = {
            orderNumber: Date.now(),
            totalPrice: totalSum,
            orderString: orderStr
        };

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/orders`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setThings(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [orders, initialItems]);

    return (
        <>
            {things ? (
                <>
                    <h3>Your order is ${things.totalPrice}.00</h3>
                    <p>{orderString}</p>
                </>
            ) : (
                <p>Loading your order...</p>
            )}
        </>
    );
}

export default Order;



