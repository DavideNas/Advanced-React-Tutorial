import { useState, useEffect } from 'react';

// 'use' is a binding word to create custom hooks
export const useFetch = (url) => {
    // useState hooks to load and save data
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState([]);

    // function to get data from url
    const getCards = async () => {
        // charge url waiting for response
        const response = await fetch(url);
        // save data file to products variable
        const cards = await response.json();
        // write data to 'products' using hook useState
        setCards(cards);
        // stop to wait for loading
        setLoading(false);
    }

    // recharge process with useEffect
    useEffect(() => {
        getCards();
    }, [url]); 
    // return infos
    return {loading, cards}
};
