import React,{useState, useEffect} from "react";
import Navbar from "../Component/Navbar";
import Restaurants from "../Component/Restaurants";


const Home = () => {
  const [restaurant,setRestaurants] = useState([]);
  const [filetedRestaurants,setFilteredRestaurants] = useState([]);

  const handleSearch = (keyword) => {
    if(keyword ===""){
      setFilteredRestaurants(restaurant);
      return;
    }
    const result = restaurant.filter((restaurant)=>{
      return (
        restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });
setFilteredRestaurants(result);
  };
  useEffect(()=>{
    //call api: getAllRestaurants
    fetch("http://localhost:5000/restaurants").then((res)=>{
      // convert to json format
      return res.json()
    })
    .then((response)=>{
      // save to state
      setRestaurants(response)
      setFilteredRestaurants(response);
    })
    .catch((err)=>{
      // catch error
      console.log(err.message);
    })
  },[]);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="titel-justify-center text-3xl text-center m-5 p-5">
          Grad Restaurant
        </h1>
      </div>
      <div className="mb-5 flex justify-center items-center">
        <label className="input flex item-center gap-2 w-5xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input 
          type="search" 
          name="keyword" 
          onChange={(e) => handleSearch(e.target.value)} 
          required 
          placeholder="Search" />
        </label>
      </div>
      <Restaurants restaurant={filetedRestaurants}/>
    </div>
  );
};

export default Home;
