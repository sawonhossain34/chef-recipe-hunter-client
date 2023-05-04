import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../Home/ChefCard/ChefCard';

const Country = () => {
    const {id} = useParams();
    const countryChefs = useLoaderData();
    return (
        <div>
            
            {id && <h3>This is Country : {countryChefs.length}</h3>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:w-full md:w-10/12 mx-auto mt-4'>
            {
                countryChefs.map(chef => <ChefCard
                key={chef._id}
                chef={chef}
                >

                </ChefCard>)
            }
            </div>
        </div>
    );
};

export default Country;