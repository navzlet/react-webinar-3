import React from "react";
import PropTypes from 'prop-types';
import './style.css'

function Cart({showCart}){
  return(
    <div className="cart">
      cart1234
      <button onClick={()=>showCart()}>close cart</button>
    </div>
  )
}

Cart.propTypes = {
  showCart: PropTypes.func
};

Cart.defaultProps = {
  showCart: () => {}
}

export default Cart;