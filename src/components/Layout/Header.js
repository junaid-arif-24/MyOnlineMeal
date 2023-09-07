import React from 'react'
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <React.Fragment>
    <header className={classes.header}><h1>
        MyOnlineMeal
    </h1>
    <HeaderCartButton onClick={props.onShow}/>
    </header>
    <div className={classes['main-image']}>
    <img src={mealsImage} alt='table full of meals'/>
    </div>

    </React.Fragment>
  )
}

export default Header
