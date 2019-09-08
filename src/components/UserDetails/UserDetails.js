import React from 'react';

import './UserDetails.css'

function UserDetails({ data }) {
    const { photo, name } = data;
    return <div className="user-details">
        <img className="user-details__photo" src={photo} alt={name} />
        <div data-selector="user-details__name">{name}</div>
    </div>;
}

export default UserDetails;
