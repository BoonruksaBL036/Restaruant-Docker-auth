import React from "react";
import Card from "./Card";
import { useAuthContext } from "../context/AuthContext";

const Restaurants = (props) => {
  const { user } = useAuthContext();
  const { restaurant,getAllRestaurants } = props;
  console.log (user)
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {restaurant && user &&
          restaurant.map((restaurant) => (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              type={restaurant.type}
              image={restaurant.img}
              getAllRestaurants={getAllRestaurants}
            />
          ))}
        {!user  && <div>You don't have permission to access this content</div>}
        {!restaurant && <div>No content</div>}
      </div>
    </div>
  );
};

export default Restaurants;
