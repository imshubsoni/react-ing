import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  const fetchAndUseSwiggyApiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchAndUseSwiggyApiData();
  }, []);

  const searchRestaurants = () => {
    let newFilteredListOfRestaurants = listOfRestaurants.filter((r) =>
      r.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredListOfRestaurants(newFilteredListOfRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h2>
        Looks like you're offline, please come back once the internet is
        reachable
      </h2>
    );
  }

  // Conditional Rendering -- rendering based on a condition or multiple conditions
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          className="search-box"
          placeholder="Search"
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            searchRestaurants();
          }}
        >
          Search
        </button>
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
            setFilteredListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((restaurantInfo) => (
          // Key property is always applied to the Parent Component -- Like here we have to give
          // Key property to Link and not to ResCard
          <Link
            to={"/restaurant/" + restaurantInfo.info.id}
            key={restaurantInfo.info.id}
          >
            <ResCard resData={restaurantInfo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
