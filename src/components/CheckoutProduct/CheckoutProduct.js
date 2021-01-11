import React from 'react'
import "./CheckoutProduct.css"
import { Card, Button, Col, Row, Image } from 'react-bootstrap'
import { useStateValue } from "../../StateProvider"

function CheckoutProduct({ id, brand, image, price, rating, name }) {
  const [{ basket }, dispatch] = useStateValue()

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
      margin-top: 5%;
    }
    .card_Ubuntu{
      font-family: 'Ubuntu', sans-serif;
    }
`}
      </style>
<div style={{marginTop: "10%"}}>
      <Row style={{ marginTop: "1%", backgroundColor: "white", marginLeft: "5%", marginBottom: "1%" }}>
        <Col className="col-md-6">
          <h5 className="card_Bowlby">{brand}</h5>
          <h5 className="subheading card_Ubuntu">{name}</h5>
          <p className="text-muted card_Ubuntu">${price}</p>
          <Button variant="flat" style={{marginTop: "5%", marginBottom: "1%"}} onClick={removeFromBasket}><span className="basketTxt">Remove from basket</span></Button>

        </Col>
        <Col className="col-md-6">
          <Image src={image} className="img-fluid" style={{ width: "180px", height: "180px", textAlign: "center", padding: "5%", objectFit: "contain" }}></Image>
        </Col>

      </Row>

      </div>
    </div>
  )
}

export default CheckoutProduct
