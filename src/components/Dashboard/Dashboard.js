import React, { useState } from 'react'
import Header from "../Header/Header"
import ItemCardContainer from "../ItemCardContainer/ItemCardContainer"
import './Dashboard.css'
import FlipCard2 from "../FlipCard/FlipCard2"



// import API from '../API/API'


function Dashboard(props) {

  const [brand, setBrand] = useState("");
  const [makeup, setMakeup] = useState([]);

  const [category, setCategory] = useState("")
  const [productType, setProductType] = useState("")
  const [cardProduct, setCardProduct] = useState([])


  return (
    <>

      <Header
        setBrand={setBrand}
        setMakeup={setMakeup}
        brand={brand}
      />
      <div className="dashboard">
        <FlipCard2
          setCategory={category}
          setProductType={productType}
          setCardProduct={setCardProduct}

        />

        <ItemCardContainer
          makeup={makeup}
        />
      </div>
    </>
  )
}

export default Dashboard
