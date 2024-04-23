import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //Normal JS Variable
  let listOfRestaurantsJS = [
    {
      info: {
        id: "55473",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Sector 10",
        areaName: "Rohini",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        parentId: "721",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "55474",
        name: "Dominos",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Sector 10",
        areaName: "Rohini",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.5,
        parentId: "721",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "55475",
        name: "McDonald's",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Sector 10",
        areaName: "Rohini",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        parentId: "721",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            //In case of useState function
            const filteredRestaurant = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestaurants(filteredRestaurant);

            //In case of Normal JS function
            // listOfRestaurants = listOfRestaurants.filter((res) => {
            //   return res.info.avgRating > 4;
            // });
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
