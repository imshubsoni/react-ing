import ResCard from "./ResCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchAndUseSwiggyApiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchAndUseSwiggyApiData();
  }, []);

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
            fetchAndUseSwiggyApiData();
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
