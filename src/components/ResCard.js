import { IMAGE_CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card-container w-56 m-2 p-4 border border-solid bg-slate-100 border-slate-800 rounded-md hover:bg-slate-200">
      <div className="res-card-image-container">
        <img
          className="res-card-image rounded-lg w-[200px] h-[200px]"
          src={IMAGE_CDN_URL + resData.info.cloudinaryImageId}
        ></img>
      </div>
      <div className="res-card-desc-container">
        <h2 className="pt-2 pb-1 font-bold font-size text-lg">
          {resData.info.name}
        </h2>
        <h4 className="py-1">{resData.info.cuisines.join(", ")}</h4>
        <h4 className="py-1">{resData.info.avgRating} Stars</h4>
        <h4 className="py-1">{resData.info.costForTwo}</h4>
        <h4 className="py-1">{resData.info.sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};

export default ResCard;
