import React,{useContext,useEffect,useState} from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isBtnHightlighted,setIsBtnHightlighted] = useState(true);

  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) =>{
    return curNumber + item.amount;
  },0)
  const btnClasses = `${classes.button} ${isBtnHightlighted ? classes.bump :''}`;

  useEffect(()=>{
   if(items.length === 0){
    return;
   }
   setIsBtnHightlighted(true);
   const timer = setTimeout(()=>{
    setIsBtnHightlighted(false);
   },300);

   return()=>{
    clearTimeout(timer);
   }
  },[items])
 
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton