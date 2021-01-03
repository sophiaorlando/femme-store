import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import {useStateValue} from '../../StateProvider'
import './Card.css'




function ProductCard(props) {
  const [{basket}, dispatch] = useStateValue()


  const addToBasket = () => {
    //Add item to basket..
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        image: props.item.image_link,
        brand: props.item.brand,
        name: props.item.name,
        price: props.item.price,
      }
    })

  }
  return (
    <div>
      <Col sm="4" >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.item.image_link} />
          <Card.Body className="text-center">
            <Card.Title><h3>{props.item.brand}</h3></Card.Title>
            <Card.Text>
            <h5>{props.item.name}</h5>
            <h5>${props.item.price}</h5>

            </Card.Text>
            <Button onClick={addToBasket}>Add to basket</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default ProductCard;
