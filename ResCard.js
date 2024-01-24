const ResCard = (props) => {
  const { resData } = props;
  return (
    <div
      className="res-card-container"
      style={{ backgroundColor: "lightgray", padding: "5px" }}
    >
      <div className="res-card-image-container">
        <img
          className="res-card-image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
        ></img>
      </div>
      <div className="res-card-desc-container">
        <h2>{resData.info.name}</h2>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} Stars</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};

export default ResCard;
