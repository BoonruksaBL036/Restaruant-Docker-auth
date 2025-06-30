import React, { useState } from "react";
import Navbar from "../Component/Navbar";

const Add = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant added successfully!!");
        setRestaurant({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-1/4 border p-4 shadow-xl h-auto gap-3">
          <legend className="fieldset-legend text-2xl ">Add Restaurant</legend>

          <label className="label">Restaurant Title : </label>
          <input
            type="text"
            name="title"
            value={restaurant.title}
            className="input w-full"
            placeholder="Restaurant Title"
            onChange={handlechange}
          />

          <label className="label">Restaurant Type </label>
          <input
            type="text"
            name="type"
            value={restaurant.type}
            className="input w-full"
            placeholder="Restaurant Type"
            onChange={handlechange}
          />

          <label className="label">Restaurant Img : </label>
          <input
            type="text"
            value={restaurant.img}
            className="input w-full"
            onChange={handlechange}
            placeholder="Restaurant Img"
            name="img"
          />
          {restaurant.img && (
            <div className="flex items-center gap-2">
              <img className="h-32 " src={restaurant.img} />
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button className="btn btn-success" onClick={handleSubmit}>
              Add
            </button>
            <button className="btn btn-error">Cancel</button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Add;
