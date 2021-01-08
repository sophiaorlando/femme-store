import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'
import Card from '../Card/Card'


function ItemCardContainer() {
  const [{ searchResults }] = useStateValue()
  const [{ filteredResults }] = useStateValue()



  return (
    <Container>
      <Row>
        {

          filteredResults ?

            filteredResults?.map(item => (
              <Card
                item={item}
                key={item.key}
              />
            ))

            : searchResults?.map(item => (
              <Card
                item={item}
                key={item.key}
              />
            ))
        }
      </Row>
    </Container>
  )
}

export default ItemCardContainer
