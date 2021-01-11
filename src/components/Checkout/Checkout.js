import React from 'react'
import { useStateValue } from '../../StateProvider'
import "./Checkout.css"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from "../Subtotal/Subtotal"

function Checkout() {
  const [{ basket }] = useStateValue()
  return (
    <div className="checkout_image checkout">
<div>
      {/* <img className="checkout_ad" src={collage} alt="" /> */}
      {basket?.length === 0 ? (
        <div>
          <h2 className="checkout_title">Your Shopping Basket is Empty</h2>
          <p className="basket_empty">
            You have no items in your basket. To buy one or more item, Click, "Add to Basket" to the item.
          </p>
        </div>
      ) : (
          <div >
            <h2 className="checkout_title">Your Shopping Basket</h2>

            <div className="background_card">
            {basket.length > 0 && (
          <div className="row">
            <div className="col">
           <Subtotal/>
           </div>
            </div>
        )}
            {basket?.map(item => (
              <CheckoutProduct
                id={item.id}
                brand={item.brand}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
              
            ))}
            </div>

            
          </div>
        )}
        </div>

    </div>
  )
}

export default Checkout
