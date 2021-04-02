import { useState, useEffect } from 'react';

// 'use' is a binding word to create custom hooks
export const useFetch = (url) => {
    // useState hooks to load and save data
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    // function to get data from url
    const getProducts = async () => {
        // charge url waiting for response
        const response = await fetch(url);
        // save data file to products variable
        const products = await response.json();
        // write data to 'products' using hook useState
        setProducts(products);
        // stop to wait for loading
        setLoading(false);
    }

    // recharge process with useEffect
    useEffect(() => {
        getProducts();
    }, [url]); 
    // return infos
    return {loading, products}
};
