import React from "react";

import { IMG_CDN_URL } from "../Common/config";

const RestaurantCard = ({
  info,
  cloudinaryImageId,
  name,
  cuisines,
  locality,
}) => {
  return (
      <div class="card-container">
        <div class="card">
          <div class="card-image">
          <img src={IMG_CDN_URL + cloudinaryImageId}>
            </img>
            <div class="overlay"></div>
            <div class="card-title">
              <h3>{name}</h3>
            </div>
          </div>
          <div class="card-content">
            <p>{cuisines[0] + cuisines[1]}</p>
            <p>₹1500 for two • 0.8 km</p>
            <p class="location">{locality}</p>

            <button class="table-booking">🪑 Table booking</button>

            <div class="rating">⭐ 4.0</div>

            <div class="offers">
              <p class="bank-offer">💳 Up to 10% off with bank offers</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RestaurantCard;
