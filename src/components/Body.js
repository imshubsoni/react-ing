import ResCard from "./ResCard";
import resList from "../utils/RestaurantsList";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input className="search-box" placeholder="Search" name="search" />
        <button className="search-button">Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurantInfo) => (
          <ResCard key={restaurantInfo.info.id} resData={restaurantInfo} />
        ))}
      </div>
    </div>
  );
};

export default Body;
