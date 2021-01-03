import React from 'react'
import Header from '../Header/Header'
import ItemCardContainer2 from '../ItemCardContainer2/ItemCardContainer2'
import './ProductsPage.css'

function ProductsPage() {


  return (

    <div >
          <Header/>
      <h1>This is the products Products Page</h1>
      <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            <div className="productsPage">
            
              <ItemCardContainer2
              />
              </div>
          </div>

    </div>
  )
}

export default ProductsPage
