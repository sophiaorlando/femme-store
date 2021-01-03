import React from 'react'
import './Product.css'
import {useStateValue} from '../../StateProvider'
import { Button } from 'react-bootstrap'


function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue()

const addToBasket = () => {
dispatch({
  type: 'ADD_TO_BASKET',
  item:{
    id: id,
    title: title,
    image: image,
    price: price,
    rating: rating
  }
})

}

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(rating)
              .fill()
              .map((_) =>
                <p>⭐</p>)
          }
        </div>
      </div>

      <img src={image} alt=""></img>
      <Button onClick={addToBasket}>Add to basket</Button>
    </div>
  )
}

export default Product
