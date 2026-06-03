import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import mockData from "../utils/mockData";
import restaurantsData from "../utils/restaurants.json";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>{
    //local state variable - super powerful variable
    const [ListOfRestaurants, setListOfRestaurants] =useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [seacrhText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    // const fetchData = async () => {
    //     const data = await fetch (
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3845181&lng=77.2763344&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );
    //     const json = await data.json();

    //     console.log(json);
    //     //OPTIONAL CHAINING
    //     setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    //     setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
         
    // }

    const fetchData = async () => {
  
    const restaurants =
    restaurantsData.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return(
            <h1>
                Looks like you're offline!! Please check your internet connection;
            </h1>
        );

    //CONDITIONAL RENDERING
    if (ListOfRestaurants.length === 0) {
        return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="border border-solid border-black" 
                    value={seacrhText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        const filteredlist =ListOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(seacrhText.toLowerCase())                       
                     );
                     setFilteredRestaurant(filteredlist); 
                    }}>search</button>
                </div>
                <div className="seacrh m-4 p-4 flex items-center">
                    <button 
                    className="px-4 py-2 bg-gray-100"
                    onClick={()=>{
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating > 4 
                    );
                    setFilteredRestaurant(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
                </div>
            </div>
           <div className="flex flex-wrap">
  {filteredRestaurant.map((restaurant) => (
    <Link
      key={restaurant.info.id}
      to={"/restaurants/" + restaurant.info.id}
    >
      <RestaurantCard resData={restaurant} />
    </Link>
  ))}
</div>
        </div>
    )
}
export default Body;