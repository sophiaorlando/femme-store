import React from 'react'
import "./Subtotal.css"
import { Button} from 'react-bootstrap'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../StateProvider'
import { getBasketTotal } from '../../reducer'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="subtotal">

<style type="text/css">
  {`
  .proceed_checkout{
    background-color: rgb(255, 0, 119);
    color: black;
    padding:5px;
    border-width:0px;
    margin-top:10px;
    font-family: 'Bowlby One SC', cursive;

  }
  `}
</style>

      <CurrencyFormat
      renderText={(value)=> (
<>
      <p> Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      <Button className="proceed_checkout">Proceed to Checkout</Button>

        </>
      )}

        decimalSclae={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

      />

    </div>
  )
}

export default Subtotal
