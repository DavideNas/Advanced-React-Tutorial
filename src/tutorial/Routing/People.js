import React, { useState } from 'react';
import { data } from '../data';
import { Link } from 'react-router-dom';

const People = () => {
    const [people, setPeople] = useState(data);
    return (
        <div>
            <h1>People Page</h1>
            {people.map((person) => {
                return (
                    <div key={ person.id }>
                        <h4>{ person.name }</h4>
                        {/* link to a person page passing id  */}
                        <Link to={`/person/${person.id}`}>Learn More</Link>
                    </div>
                );
            })}
        </div>
    )
}

export default People;
