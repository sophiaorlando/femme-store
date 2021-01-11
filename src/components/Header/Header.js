import React, { useState } from 'react'
import "./Header.css"
import { Alert, Button, InputGroup, FormControl } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from '../../StateProvider'
import BWPrint from '../../assets/img/App/BWPrint.jpg'




function Header(props) {


  const [{ basket }] = useStateValue()
  const [error, setError] = useState("")
  let setBrand = props.setBrand
  let brand = props.brand
  const { currentUser, logout } = useAuth()

  const [{ searchResults }, dispatch] = useStateValue()

  const history = useHistory()

  const addSearchResults = (data) => {
    dispatch({
      type: 'ADD_SEARCH_RESULTS',
      item: data
    })
  }

  function HandleClick(e) {
    e.preventDefault()
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
      .then(response => response.json())
      .then((data) => {
        setBrand("")
        // console.log(data)
        addSearchResults(data)

        // setMakeup(data)
      })
    history.push('/products-page')

  }


  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  // console.log(basket);

  return (
    <div>

      <style type="text/css">
    {`
    .btn-flat {
      background-color: rgb(255, 0, 119);
      color: black;
    }
    .searchTxt{
      color: black;
      font-weight:bold;
    }
    `}
  </style>

      <nav className="header">
        {/* logo */}
        <Link to="/">
          <img className="header_logo" src={BWPrint} alt=""></img>
        </Link>

        {/* Seach Bar */}
        <InputGroup className="mb-3">
        <FormControl
            placeholder="Brand Name"
            aria-label="Brand Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}

          />
          <InputGroup.Append>
              <Button
                onClick={HandleClick} variant="flat">
                  <span className="searchTxt">Search</span>
              </Button>
          </InputGroup.Append>

        </InputGroup>

        {/* Links */}
        <div className="header_nav">
          {error && <Alert variant="danger">{error}</Alert>}

          {/* User Email and Update Profile */}
          <Link to="/update-profile" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Profile</span>
              <span className="header_optionLineTwo">{currentUser.email}</span>
            </div>
          </Link>

          {/* Handles Logout for User */}
          <div className="header_link">
            <div className="header_option">
              <Button variant="default" className="textColor" onClick={handleLogout}>Log Out</Button>
            </div>
          </div>

          {/* Returns and Orders */}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Returns </span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* Basket */}
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
            </div>
          </Link>


        </div>


      </nav>

    </div>
  )
}

export default Header
