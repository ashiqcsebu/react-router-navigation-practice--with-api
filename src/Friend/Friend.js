import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, username } = friend;

    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/friend/${id}`)
    }

    return (
        <div>

            <h1>{name}</h1>
            <p> UserName: <Link to={`/friend/${id}`}>{username}</Link>  </p>
            <Link to={`/friend/${id}`}>
                <button>{username}</button>
            </Link>

            <button onClick={handleNavigate}>{username}</button>

        </div>
    );
};

export default Friend;