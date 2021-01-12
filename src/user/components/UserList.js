import React from 'react';
import UserItem from './UserItem';

import './UserList.css'
 
const UserList = props => { 
    
        if (props.item.length === 0){

            return <h2>Not Found.</h2>
        }

        return <ul className="users-list">
            {props.item.map( (user) => {
                return(
                <UserItem key={user.id} id={user.id}
                name={user.name}
                image={user.image}
                placesCount={user.places}
                 />)
            })}
        </ul>
        
    
}

export default UserList;