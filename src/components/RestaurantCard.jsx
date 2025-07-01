import React from "react";
import { IMG_CDN_URL } from "../Common/config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <div className="overlay"></div>
        <div className="card-title">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="card-content">
        <p>{cuisines[0] + ", " + cuisines[1]}</p>
        <p>₹1500 for two • 0.8 km</p>
        <p className="location">{locality}</p>

        <button className="table-booking">🪑 Table booking</button>

        <div className="rating">⭐ 4.0</div>

        <div className="offers">
          <p className="bank-offer">💳 Up to 10% off with bank offers</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
