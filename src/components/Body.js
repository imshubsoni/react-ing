import ResCard from "./ResCard";
import resList from "../utils/RestaurantsList";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body-container">
      <div className="search-container">
        <input className="search-box" placeholder="Search" name="search" />
        <button className="search-button">Search</button>
      </div>
      <div className="filters-container">
        <button
          className="filter-button"
          onClick={() => {
            setListOfRestaurants(resList);
          }}
        >
          All Restaurants
        </button>
        <button
          className="filter-button"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurantInfo) => (
          <ResCard key={restaurantInfo.info.id} resData={restaurantInfo} />
        ))}
      </div>
    </div>
  );
};

export default Body;
