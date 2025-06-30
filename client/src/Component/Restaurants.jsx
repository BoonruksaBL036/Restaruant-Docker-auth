import React from 'react'
import Card from './Card';

const Restaurants = (props) => {
  const {restaurant}=props;
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {restaurant &&
          restaurant.map((restaurant) => (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              type={restaurant.type}
              image={restaurant.img}
            />
          ))}
      </div>
    </div>
  );
}

export default Restaurants