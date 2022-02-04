import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem.jsx';
import AppContext from '@context/AppContext.js';
import '@styles/MyOrder.scss'
import flechita from "@icons/flechita.svg";


const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = ( accumulator, currentValue ) => accumulator + currentValue.price;
    const sum =  state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title"> My Order</p>
      </div>
      <div className="my-order-content">
        { state.cart.map( item => (
          <OrderItem product= {item} key={`orderItem-${item.id}`} />
        ))}
        
        <div className="order">
          <p>
            <span> Total</span>
          </p>
          <p> ${sumTotal()}</p>
        </div>
        <button className="primary-button"> Checkout </button>
      </div>
    </aside>
  );
}

export default MyOrder;