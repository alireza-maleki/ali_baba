import React from 'react';
import Items from './Items';


import classes from "./Product.module.css";



const Product = (props) => {

  console.log(props.products)

  return (

    <div className={classes.product}>
      <div className={classes.layout}>

        <div className={classes.link}>
          <div>
            <h4>Well-reviwed Products</h4>
            <p>Get well reviwed itemsfrom the past 180 days</p>
            <button>Source Now</button>
          </div>
        </div>


        <div className={classes.data}>
          <Items products={props.products} />
        </div>

      </div>
    </div>
  )
}



export default Product