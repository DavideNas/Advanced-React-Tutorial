import React, { useState, useEffect } from 'react'

const url = "https://api.github.com/users/QuincyLarson";

// sample of Conditional Rendering with multiple return
const ConditionalRendering = () => {
    const [isLoading, setIsLoading] = useState(true);
    const[isError, setIsError] = useState(false);
    const [user, setUser] = useState("default user");

    useEffect(()=> {
        // set this if main setIsLoading is FALSE
        //setIsLoading(true);
        fetch(url)
            .then((resp) => resp.json())
            // to print all data i fetch
            // .then((user) => console.log(user))
            // resolve loading printing data
            .then((user) => {
                const {login} = user;
                setUser(login)
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    },[]);

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if(isError){
        return (
            <div>
                <h2>Error...</h2>
            </div>
        )
    }
    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
}

export default ConditionalRendering
