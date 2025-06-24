import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuShimmerUI from "./MenuLoader";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../Utils/Redux/cartSlice";

//useParam() HOOk
/*

 ->useParam() is a hook wich is used to get the parameter of (id) for dynamic routing.

*/

const RestaurantMenu = () => {
  // const param = useParams();

  const dispatch = useDispatch();

    const handleAddItem = (items) =>{

        dispatch(addItems(items));

    }

  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  //    console.log(id); //it will print the value of the id;

  return !restaurantMenu ? (
    <MenuShimmerUI />
  ) : (

    <>
    <div className="MenuHeroContainer">
      <div class="hero">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurantMenu.data?.cards[2]?.card?.card.info.cloudinaryImageId
          }
        ></img>
        <div class="overlay"></div>
        <div class="hero-content">
          <h1>{restaurantMenu?.data?.cards[2]?.card?.card?.info?.name}</h1>
          <p>
            {
              restaurantMenu?.data?.cards[2]?.card?.card?.info
                ?.costForTwoMessage
            }
          </p>
          <button class="btn">View Menu</button>
        </div>
      </div>

      </div>

        <center>
          <h1 className="menuHeading">MENU</h1>
        </center>

        <br></br>

        <div className="menuContainer">
        {restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.slice(2) // Slice from index 2
          ?.map((elements) => {
            if (Array.isArray(elements?.card?.card?.itemCards)) {
              // Filter out items where imageId is missing, then limit to 10 items
              return elements?.card?.card?.itemCards
                .filter((items) => items?.card?.info?.imageId) // Keep only items with images
                .map((items) => (
                  <div class="menu-card">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${items?.card?.info?.imageId}`}
                      alt={items?.card?.info?.name || "Food Item"}
                    />
                    <div class="menu-content">
                      <div class="title">{items?.card?.info?.name}</div>
                      <div class="category">
                        Category: {items?.card?.info?.category}
                      </div>
                      <div class="price">
                        Price: {"₹" + (items?.card?.info?.price || "N/A")}
                      </div>
                      <div class="description">
                        Steamed yasai gyoza with udon noodles. Served with a
                        hearty vegetable broth, roasted bok choi, and chilli
                        sambal paste. Topped with spring onion, coriander, and
                        chilli oil.
                      </div>
                      <div class="buttons">
                        <button onClick={() => handleAddItem(items)}>add to cart</button>

                      </div>
                    </div>
                  </div>
                ));
            } else {
              return
            }
          })}
      </div>
    </>
  );
};

export default RestaurantMenu;
