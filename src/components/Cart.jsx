import React from "react";
import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import "../css/cart.css"

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.Items);
  
  return (  
    <div className="cartContainer">
      {cardItems.map((elements) => {
        return <FoodItems restaurantMenu={elements}></FoodItems>;
      
      })}
    </div>
  );
};

export default Cart;