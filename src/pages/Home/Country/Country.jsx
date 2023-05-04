import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from '../Home/ChefCard/ChefCard';

const Country = () => {
    // const { id } = useParams();
    const countryChefs = useLoaderData();
    return (
        <div>
         {/* pass details */}

            <div>
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