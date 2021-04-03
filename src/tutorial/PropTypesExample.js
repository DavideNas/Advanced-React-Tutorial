import React from 'react';
import Card from "./Card";
import { useFetch } from "./UseFetch";

// define url I want ot load 
const url = "https://api.scryfall.com/cards/search?order=set&q=e%3Akhc&unique=prints";

const PropTypesExample = () => {
    // load data into object 'cards'
    const { cards } = useFetch(url);
    return (
        <div>
            <h2>Cards</h2>
            <section>
                {/* print object I loaded */}
                { console.log(cards) }
                {/* slit array of data I loaded previously */}
                { cards.data.map((card) => {
                    // return a component for every single card if array
                    return <Card key={card.id} {...card} />;
                })} 
            </section>
        </div>
    )
}

export default PropTypesExample;
