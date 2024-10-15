import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const subtotal = getBasketTotal(basket) // Adjust subtotal value as needed

  return (
    <div className='subtotal'>
      <>
        <p>
          Subtotal ({basket.length} items): <strong>{formatCurrency(subtotal)}</strong>
        </p>
        <small className='subtotal_gift'>
          <input type="checkbox" /> This Order Contains a gift
        </small>
      </>
        <button className='subtotal_checkoutButton'>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
