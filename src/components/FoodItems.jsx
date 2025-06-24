import React from "react";
import "../css/cart.css";
import { useDispatch } from "react-redux";
import { removeItems} from "../Utils/Redux/cartSlice";
const FoodItems = (items) => {

  const dispatch = useDispatch();
    const handleRemoveItem = () =>{

      dispatch(removeItems());

    }

    return (
    <>
              <div className="menuList">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    items?.restaurantMenu?.card?.info?.imageId
                  }
                ></img>

                <div className="menuListDetails">
                  <h4>{items?.restaurantMenu?.card?.info?.name}</h4>
                  <h5>{items?.restaurantMenu?.card?.info?.category}</h5>
                  <h6>{"At price : ₹" + items?.restaurantMenu?.card?.info?.price}</h6>
                </div>
                <button className="buttonn" onClick={handleRemoveItem}>remove Item
                </button>
              </div>
    </>
  );
};

export default FoodItems;