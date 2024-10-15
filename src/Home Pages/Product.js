import React, { useState } from 'react'
import './Product.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from '../StateProvider';
import { type } from '@testing-library/user-event/dist/type';

function Product({ id, image, title, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const  addToBasket = () =>{
    //dispatch the items into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
      

    });

  

  }

  

  return (
    <div className='product'>
      
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating).fill().map((_, i) => (<p >🌟</p>))}
          
        </div>
      </div>
      <img src={image}/>

      
      <button onClick={addToBasket}className='product_button'>Add To Cart </button>
    
     

    
      
      </div>
   
      
      
   
  )
}

export default Product
