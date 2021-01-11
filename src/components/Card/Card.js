import { Card, Button, Col, Overlay, Tooltip } from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'
import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import './Card.css'




function ProductCard(props) {
  const [{ basket }, dispatch] = useStateValue()
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const history = useHistory()


  const imgClick = () => {
    window.open(props.item.product_link)
  }


  const addToBasket = () => {
    //Add item to basket..
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        image: props.item.image_link,
        brand: props.item.brand,
        name: props.item.name,
        price: props.item.price,
        color: props.item.product_colors,
        productLink: props.item.product_link

      }
    })
    setShow(!show)
  }
  return (


    <div className="cardStyle">

      <style type="text/css">
        {`
    .btn-flat {
      background-color: rgb(255, 0, 119);
      color: white;
    }
    .btn-image {
      border-color: white;
    }
    .basketTxt{
      color: black;
      font-family: 'Bowlby One SC', cursive;

    }
    .card_Bowlby{
      font-family: 'Bowlby One SC', cursive;
    }
    .card_Ubuntu{
      font-family: 'Ubuntu', sans-serif;

    }
    .card_styling{
      border-radius:15px;
      
    }
    .image_styling{
      border-radius:15px;
      border-style:solid;
      border-width:1px;
      border-color: rgb(255, 0, 119)
    }


    `}
      </style>

      <Col sm="4" >
        <Card style={{ width: '18rem' }} className="card_styling">
          <Button onClick={imgClick} variant="image">
            <Card.Img
              variant="top"
              className="image_styling"
              src={props.item.api_featured_image}
            />
            <div className="middle">
              <div className="text">
                Go to Product
              </div>
            </div>
          </Button>
          <Card.Body className="text-center">
            <Card.Title><h3 className="card_Bowlby">{props.item.brand}</h3></Card.Title>
            <div className="card_Ubuntu">
              <h5>{props.item.name}</h5>
              <h5>${props.item.price}</h5>
            </div>
            <Button variant="flat" ref={target} onClick={addToBasket}><span className="basketTxt">Add to basket</span></Button>
            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  Added to Basket
                </Tooltip>
              )}
            </Overlay>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default ProductCard;
