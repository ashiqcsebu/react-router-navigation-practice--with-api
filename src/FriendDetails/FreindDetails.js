import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FreindDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1> deatails of : {friend.name}</h1>
            
        </div>
    );
};

export default FreindDetails;