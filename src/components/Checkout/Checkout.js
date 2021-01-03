import React from 'react'
import { useStateValue } from '../../StateProvider'
import collage from '../../assets/img/collage.jpg'
import "./Checkout.css"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from "../Subtotal/Subtotal"

function Checkout() {
  const [{ basket }] = useStateValue()
  return (
    <div className="checkout">
<div>
      <img className="checkout_ad" src={collage} alt="" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is Empty</h2>
          <p>
            You have no items in your basket. To buy one or more item, Click, "Add to Basket" to the item.
          </p>
        </div>
      ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket?.map(item => (
              <CheckoutProduct
                id={item.id}
                brand={item.brand}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
        </div>
        {basket.length > 0 && (
          <div className="checkout_right">
           <Subtotal/>
            </div>
        )}
    </div>
  )
}

export default Checkout
