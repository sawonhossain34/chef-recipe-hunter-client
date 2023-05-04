import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [countries,setCountries] = useState([]);

    useEffect( () => {
        fetch('https://chef-and-food-house-server-sawonhossain34.vercel.app/countries')
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(error => console.error(error))
    } ,[])

    return (
        <div>
            <h3>All Countries</h3>
            <div className='ps-4 bg-secondary p-3 rounded '>
                {
                countries.map(country => <p 
                key={country.id}>
                    <Link  to={`/country/${country.id}`} className='text-decoration-none  text-black'>{country.name}</Link>
                </p> )
            }
            </div>
        </div>
    );
};

export default LeftNav;