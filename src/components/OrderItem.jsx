import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import "@styles/OrderItem.scss";
import iconClose from '@icons/icon_close.png';
const bike = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = product => {
    removeFromCart(product);
  }

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={iconClose} alt="close" onClick={ () => handleRemove(product) } />
    </div>
  );
};

export default OrderItem;
