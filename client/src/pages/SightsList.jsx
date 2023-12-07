// SightsList.js
import React from 'react';
import Sight from '../components/Sight';

const SightsList = ({sights}) => {

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sights.map((sight) => (
                <Sight sight={sight} key={sight.id}/>
        ))}
      </div>
    </div>
  );
};

export default SightsList;
