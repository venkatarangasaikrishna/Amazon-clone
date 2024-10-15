import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  console.log({basket})
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/LEO/Jup24/Phase1/2/NewUnrec_NTA_PC.gif'/>
        <div>
        
        <h2 className='checkout_title'>Your Shopping Cart</h2>
        {basket.map(item => (
          < CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
            


        ))}
        


        </div>
      </div>
      
      <div className='checkout_right'>
        <Subtotal />
        
        

      </div>
      
    </div>
    
  )
}

export default Checkout
