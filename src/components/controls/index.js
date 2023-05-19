import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";

function Controls({onShowCart, cart}){
  return (
    <div className='Controls'>
      {cart.length > 0 ? <div className="Controls-cart">В корзине: {cart.length} {plural(cart.length, {one:"товар", few: "товара", many: "товаров"})} / {cart.reduce((acc, item)=> acc + (item.price * item.count), 0)}₽</div> : null}
      <button onClick={() => onShowCart()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onShowCart: PropTypes.func
};

Controls.defaultProps = {
  onShowCart: () => {}
}

export default React.memo(Controls);
