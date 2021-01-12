import React from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id:'p1',
        address:'20 W 34th St, New York, NY 10001, Estados Unidos',
        title:'empire state building',
        description:'one of the most famous.... ',
        imageUrl:'https://www.eluniversal.com.mx/sites/default/files/empire_state_2_ok_4.jpg',
        coordinates:{
            lat:40.7493683,
            lng:-73.9906096
        },
        creator:'u1'
    },  
    {
        id:'p2',
        address:'45 Rockefeller Plaza, New York, NY 10111, Estados Unidos',
        title:'Rockefeller ',
        description:'one of the most famous.... ',
        imageUrl:'https://thumbnails.expedia.com/5rck6t8OlsivrvljXcl8GlA5qSs=/536x384/smart/filters:quality(60)/mediaim.expedia.com/destination/7/3e18145e611c433978ebc613923d9d16.jpg',
        coordinates:{
            lat:40.7585616,
            lng:-73.9782455
        },
        creator:'u2'
    }
  
];

const UserPlaces = () =>{
    const userID = useParams().userID;
    const loadedPlaces = DUMMY_PLACES.filter(user => user.creator === userID)
    return<PlaceList item={loadedPlaces}/>
}

export default UserPlaces;