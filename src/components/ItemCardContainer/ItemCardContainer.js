import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../Card/Card'


function ItemCardContainer(props) {


  const [results, setResults] = useState([])

  useEffect(() => {

    if (props.makeup) {
      setResults(props.makeup)
    }

  })
// console.log(props.item.makeup)
  
  return (
    <Container>
      <Row>
        
          {props.makeup.map((item) => {
            return <Card item={item} />
          })}
      </Row>
    </Container>
  )
}

export default ItemCardContainer
