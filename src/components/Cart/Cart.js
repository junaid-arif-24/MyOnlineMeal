import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
const Cart = props => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const isOrderItem = cartCtx.items.length > 0;

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item,amount:1})
  };

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['action--alt']} onClick={props.onHide}>
          Close
        </button>
        {isOrderItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
