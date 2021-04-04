import React from 'react';
import PropTypes from "prop-types";

// define all values I want to load from url
const Card = ({image_uris, cmc, name, rarity, prices}) => {
    return (
        <article>
            {/* another way to set default parameter is write || after value */}
            <h4>{name || "MTG Card"} - {cmc || "0"} - {rarity || "common"} - € {prices.eur || "0"} - Tix {prices.tix || "0"}</h4>
            <img src={image_uris.small} alt={name}/>
        </article>
    )
}

// prop types can defined by the type of value, specifying if isRequired
Card.propTypes = {
    image_uris:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    cmc:PropTypes.string.isRequired,
    rarity:PropTypes.string.isRequired,
    prices:PropTypes.object.isRequired,
}

// default props must to keep type of value
// Card.defaultProps = {
//     image_uris:defaultImage,
//     name:"magic card",
//     cmc: 0,
//     rarity:"common",
//     prices:{ usd: "0", eur: "0", tix: "0"},
// }

export default Card;
