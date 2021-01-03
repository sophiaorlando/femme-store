import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'
import Card from '../Card/Card'


function ItemCardContainer() {
  const [{ searchResults }] = useStateValue()


  // const [results, setResults] = useState([])

  useEffect(() => {

    // if (props.cardProduct) {
    //   setResults(props.cardProduct)
    // }

  })
  // console.log(props.item.makeup)

  return (
    <Container>
      <Row>

        {searchResults?.map(item => (
          <Card 
          // id={item.id}
          // brand={item.brand}
          // image={item.image}
          // price={item.price}
          // rating={item.rating}
          item={item}
          />
          ))}

      </Row>
    </Container>
  )
}

export default ItemCardContainer
