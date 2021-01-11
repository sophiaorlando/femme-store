import React from 'react'
import "./CheckoutProduct.css"
import { Card, Button, Col } from 'react-bootstrap'
import {useStateValue} from "../../StateProvider"

function CheckoutProduct({id, brand, image, price, rating, name}) {
  const [{basket}, dispatch] = useStateValue()

const removeFromBasket = () => {

  dispatch({
    type: "REMOVE_FROM_BASKET",
    id: id
  })
}

  return (
    <div className="checkoutProduct">

<style type="text/css">
{`
    .basketTxt{
      color: black;
      font-family: 'Bowlby One SC', cursive;
    }
    .image_styling{
      border-radius:15px;
      border-style:solid;
      border-width:1px;
      border-color: rgb(255, 0, 119);
    }
    .card_styling{
      border-radius:15px;
      width:300px;
      margin-bottom:20px;
      
    }
    .card_Bowlby{
      font-family: 'Bowlby One SC', cursive;
    }
    .card_Ubuntu{
      font-family: 'Ubuntu', sans-serif;
    }
`}
</style>
      <Col sm="4" >
        <Card style={{ width: '18rem' }} className="card_styling">
            <Card.Img 
            variant="top" 
            className="image_styling"
            src={image} />
          <Card.Body className="text-center">
            <Card.Title><h3 className="card_Bowlby">{brand}</h3></Card.Title>
            <div className="card_Ubuntu">
              <h5 >{name}</h5>
              <h5>${price}</h5>
              {/* <h5>${props.item.product_colors[0]}</h5> */}



            </div>
            <Button variant="flat" onClick={removeFromBasket}><span className="basketTxt">Remove from basket</span></Button>
          </Card.Body>
        </Card>
      </Col>


    </div>
  )
}

export default CheckoutProduct
