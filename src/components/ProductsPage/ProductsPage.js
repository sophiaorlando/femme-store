import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Tags from '../Filters/Filters'
import ItemCardContainer2 from '../ItemCardContainer2/ItemCardContainer2'

import './ProductsPage.css'

function ProductsPage() {



  return (

    <div >
      <Header />
      <div>
        {/* <div className="productsPage"> */}

          <h1 className="product_header">Products </h1>

        {/* </div> */}

          {/* <SideBar/> */}
          <SideBar width={300} height={"100vh"}>
            <Tags />
          </SideBar>
          <ItemCardContainer2/>
      </div>
    </div>
  )
}

export default ProductsPage
