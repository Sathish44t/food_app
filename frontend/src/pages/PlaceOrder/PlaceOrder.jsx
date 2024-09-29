import React, { useContext } from 'react'
import'./PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCartAmount} =useContext(StoreContext)
    return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title"> Delivery Infromation</p>
        <div className="multi-fields">
          <input type='text' placeholder='First name ' />
          <input type='text' placeholder='Second name'/>
        </div>
        <input type='email' placeholder='Email address'/>
        <input type='text' placeholder='Street' />
        <div className="multi-fields">
        <input type='text' placeholder='city ' />
        <input type='text' placeholder='State'/>
          </div>
          <div className="multi-fields">
        <input type='text' placeholder='zip code ' />
        <input type='text' placeholder='country'/>
          </div>
          <input type='text' placeholder='phone'/>
      </div>
       <div className="place-order-right">
       <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery free</p>
              <p>₹{getTotalCartAmount()===0?0:69}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+69}</b>
            </div>
            <hr/>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
       </div>
    </form>
  )
}

export default PlaceOrder