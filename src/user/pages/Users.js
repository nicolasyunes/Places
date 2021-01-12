import React from 'react';
import UserList from '../components/UserList';


const Users = () => {
  const USERS = [{
    id: 'u1',
    name: 'Nicolas Yunes',
    image:'https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg',
    places:4

    
  }]
  return <UserList  item={USERS}/>
};

export default Users;
