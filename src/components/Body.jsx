import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { FilterData } from "../Utils/helper.js";
import useOnline from "../Hooks/useOnline.jsx";
import useRestaurantData from "../Hooks/useRestaurantData.jsx";
import { restaurantAPI } from "../Common/config.js";
import HeroSection from "../components/HeroSection.jsx";
import Offline from "../components/Offline.jsx";

const Body = () => {
  const [InputValue, setInputValue] = useState("");
  const [allRestaurants, filteredRes] = useRestaurantData(restaurantAPI);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  const renderCondition =
    filteredRestaurants === null ? filteredRes : filteredRestaurants;

  const isOnline = useOnline();
  if (!isOnline) return <Offline />;

  if (!allRestaurants) return null;

  return (
    <div className="body">
      <HeroSection />

      <div className="SearchContainer">
        <h1>Discover the best food & drinks</h1>
        <div className="Search-Container">
          <input
            type="text"
            placeholder="Enter Restaurant Name..."
            value={InputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            id="SearchBtn"
            onClick={() => {
              const searchedRestaurantData = FilterData(
                InputValue,
                allRestaurants
              );
              setFilteredRestaurants(searchedRestaurantData);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {allRestaurants?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <>
          {renderCondition?.length === 0 ? (
            <p>No data found for: {InputValue}</p>
          ) : (
            <div className="card-container">
              {renderCondition.map((restaurantObj) => (
                <Link
                  id="cardsAnchor"
                  to={"/restaurant/" + restaurantObj.info.id}
                  key={restaurantObj.info.id}
                >
                  <RestaurantCard {...restaurantObj.info} />
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Body;
