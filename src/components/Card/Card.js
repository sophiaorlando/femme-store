import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'
import { useHistory } from 'react-router-dom'
import './Card.css'




function ProductCard(props) {
  const [{ basket }, dispatch] = useStateValue()
  

  const history = useHistory()


  const imgClick = () => {
    history.push('/singleProduct-page')

  }

  // if (props.item.product_colors) {
  //   console.log(props.item.product_colors[0].colour_name)
  // } else if (props.item.product_colors[0] === []) {
  //   console.log("no results")

  // }

  const addToBasket = () => {
    //Add item to basket..
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        image: props.item.image_link,
        brand: props.item.brand,
        name: props.item.name,
        price: props.item.price,
        color: props.item.product_colors

      }
    })

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
      font-weight:bold;
    }
    `}
      </style>

      <Col sm="4" >
        <Card style={{ width: '18rem' }}>
          <Button onClick={imgClick} variant="image">
            <Card.Img variant="top" src={props.item.api_featured_image} />

          </Button>
          <Card.Body className="text-center">
            <Card.Title><h3>{props.item.brand}</h3></Card.Title>
            <div>
              <h5>{props.item.name}</h5>
              <h5>${props.item.price}</h5>
              {/* <h5>${props.item.product_colors[0]}</h5> */}



            </div>
            <Button variant="flat" onClick={addToBasket}><span className="basketTxt">Add to basket</span></Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default ProductCard;
