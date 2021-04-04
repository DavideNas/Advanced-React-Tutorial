import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from "./UseFetch";
import Card from "./Card";
import { Button } from "antd";
import "antd/dist/antd.css";

// memo function to skip re-render of useState

const url = "https://api.scryfall.com/cards/search?order=set&q=e%3Asta&unique=prints";
// every time props or state changes, component re-renders

const Index = () => {
    const { loading, cards } = useFetch(url);
    const [count, setCount] = useState(0);
    const [cart,setCart] = useState(0);

    // useCallback will re-render list only if 'cart' value is changed
    const addToCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart]);

    return (
        <section>
            <h2>useMemo & useCallback</h2>
            <h1>Count: {count}</h1>
            <Button onClick={() => setCount(count + 1)}>click me</Button>
            <h1>Cart: {cart}</h1>
            <h2>{loading ? 'loading...' : 'data'}</h2>
            {/* this 'addToCart' function is trigged by re-render */}
            <BigList cards={cards} addToCart={addToCart} />
        </section>
    )
}

// I wrap whole function to "React.memo()"
// this will not re-render the list when useState trigger it.
const BigList = React.memo(({ cards, addToCart }) => {
    useEffect(() => {
        // console.log to check rerender of the component
        console.log("big list called");
    })
    return (
        <div>
            <h2>Card list</h2>
            <section>
                <ul style={{ liststyle: "none", display: "flex", flexWrap: "wrap", justifyContent: "center", }} >
                    <div style={{
                        minWidth: "290px",
                        margin: "0", 
                        height: "100%",
                        color: "#617d98",
                        fontSize: "0.75rem",
                        margin: "1rem",
                        background: "#fff",
                        borderradius: "1rem",
                        padding: "1rem 2rem",
                        listStyle: "none",
                    }}>
                        { 
                        // console.log(cards.data);
                        cards.data.map((card) => {
                            // return a component for every single card if array
                            return (
                                <li style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}>
                            
                            <Card key={card.id} {...card} addToCart={addToCart} />
                            </li>
                        )
                    })};
                    </div>
                </ul>
            </section>
        </div>
    );
});

export default Index;
