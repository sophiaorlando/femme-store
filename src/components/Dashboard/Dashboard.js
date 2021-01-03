import React, { useState } from 'react'
import Header from "../Header/Header"
import ItemCardContainer from "../ItemCardContainer/ItemCardContainer"
import ItemCardContainer2 from "../ItemCardContainer2/ItemCardContainer2"
import './Dashboard.css'
import collage from '../../assets/img/collage.jpg'
import FlipCard from "../FlipCard/FlipCard"
import {useStateValue} from '../../StateProvider'
import { Link } from "react-router-dom"


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
        <FlipCard
          setCategory={category}
          setProductType={productType}
          setCardProduct={setCardProduct}

        />

        <img className="dashboard_image" src={collage} alt="" ></img>


        <ItemCardContainer
          makeup={makeup}
        />
        {/* <ItemCardContainer2
          cardProduct={cardProduct}
        /> */}
      </div>
    </>
  )
}

export default Dashboard
