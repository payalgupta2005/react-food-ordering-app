import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 shadow-md hover:shadow-xl transition duration-300">
      <img
  className="w-full h-[200px] object-cover rounded-lg "
  src={cloudinaryImageId}
  onError={(e) => {
    e.target.src =
      "https://cdn-icons-png.flaticon.com/512/1046/1046784.png";
  }}
/>

      <div className="res-info">
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;