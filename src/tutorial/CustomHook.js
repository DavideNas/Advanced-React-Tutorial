import React, { useState, useEffect } from 'react';
// import cursom Hook from file
import { useFetch } from "./UseFetch";

// link to a json file (mtg card list)
const url = "https://api.scryfall.com/cards/search?order=set&q=e%3Asta&unique=prints";


const CustomHook = () => {
    // init 2 params returned by custom hooks:
    // 1- 'loading' (to manage waiting response)
    // 2- 'products' (to save data info into a file)
    const { loading, products } = useFetch(url);
    // print data loaded
    console.log(products);
    return (
        <div>
            <h2>Custom Hooks</h2>
            {/* write to screen if it load data or they are saved to 'products' file */}
            <h2>{loading ? 'loading...' : 'data'}</h2>
        </div>
    )
}

export default CustomHook;
