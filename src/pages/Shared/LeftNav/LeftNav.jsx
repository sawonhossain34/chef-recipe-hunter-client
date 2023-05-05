import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../ActiveLink/ActiveLink';

const LeftNav = () => {
    const [countries,setCountries] = useState([]);

    useEffect( () => {
        fetch('https://chef-and-food-house-server-sawonhossain34.vercel.app/countries')
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(error => console.error(error))
    } ,[])

    return (
        <div  style={{backgroundColor:'rgba(255, 151, 144, 0.3)'}}>
            <h3>All Countries</h3>
            <nav className='ps-4  p-3 rounded ' style={{backgroundColor:'rgba(255, 214, 223, 0.3)'}}>
                {
                countries.map(country => <p 
                key={country.id}>
                    <ActiveLink  to={`/country/${country.id}`} className='text-decoration-none  text-black'>{country.name}</ActiveLink>
                </p> )
            }
            </nav>
        </div>
    );
};

export default LeftNav;