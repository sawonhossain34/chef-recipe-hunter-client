import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../Home/ChefCard/ChefCard';

const Country = () => {
    const {id} = useParams();
    const countryChefs = useLoaderData();
    return (
        <div>
            <h3>This is Country : {countryChefs.length}</h3>
            {
                countryChefs.map(chef => <ChefCard
                key={chef._id}
                chef={chef}
                >

                </ChefCard>)
            }
        </div>
    );
};

export default Country;