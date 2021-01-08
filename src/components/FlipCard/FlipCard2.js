import React from 'react'
import "./FlipCard.css"
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useStateValue } from "../../StateProvider"


function FlipCard(props) {

  const [{ searchResults }, dispatch] = useStateValue()

  const addSearchResults = (data) => {
    dispatch({
      type: 'ADD_SEARCH_RESULTS',
      item: data
    })
  }

  const history = useHistory()

  // let setCardProduct = props.setCardProduct

  function MakeupClick(e) {

    // e.preventDefault()
    // let target = e.target.value
    let makeupArr = e.target.value.split(",")
    //blush
    let productType = makeupArr[0]
    //powder
    let category = makeupArr[1]


    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productType}&product_category=${category}`)
      .then(response => response.json())
      .then((data) => {

        addSearchResults(data)

        console.log(data)
      })
    history.push('/products-page')
  }

  let blushCategories = [
    "Blush,Powder",
    "Blush,Cream",

  ]

  let eyelinerCategories = [
    "Eyeliner,Liquid",
    "Eyeliner,Pencil",
    "Eyeliner,Gel",
    "Eyeliner,Cream",

  ]

  let eyeshadowCategories = [
    "Eyeshadow,Palette",
    "Eyeshadow,Pencil",
    "Eyeshadow,Cream",
  ]

  let foundationCategories = [
    "Foundation,Concealer",
    "Foundation,Liquid",
    "Foundation,Contour",
    "Foundation,BB cc",
    "Foundation,Cream",
    "Foundation,Mineral",
    "Foundation,Powder",
    "Foundation,Highlighter",
  ]

  let lipstickCategories = [
    "Lipstick,Lipstick",
    "Lipstick,Lip gloss",
    "Lipstick,Liquid",
    "Lipstick,Lip stain",
  ]

  let blushCategoriesList = []
  blushCategories.forEach((blushCategory, index) => {
    let blushArr = blushCategory.split(",")
    let blushType = blushArr[1]
    blushCategoriesList.push(
      <button
        onClick={MakeupClick}
        className="flat"
        key={index}
        value={blushCategory}
      >{blushType} </button>
    )
  }

  )

  let eyelinerCategoriesList = []
  eyelinerCategories.forEach((eyelinerCategory, index) => {
    let eyelinerArr = eyelinerCategory.split(",")
    let eyelinerType = eyelinerArr[1]
    eyelinerCategoriesList.push(
      <button
        onClick={MakeupClick}
        className="flat"
        key={index}
        value={eyelinerCategory}
      >{eyelinerType} </button>
    )
  }

  )

  let eyeshadowCategoriesList = []
  eyeshadowCategories.forEach((eyeshadowCategory, index) => {
    let eyelinerArr = eyeshadowCategory.split(",")
    let eyelinerType = eyelinerArr[1]
    eyeshadowCategoriesList.push(
      <button
        onClick={MakeupClick}
        className="flat"
        key={index}
        value={eyeshadowCategory}
      >{eyelinerType} </button>
    )
  }

  )

  let foundationCategoriesList = []
  foundationCategories.forEach((foundationCategory, index) => {
    let foundationArr = foundationCategory.split(",")
    let foundationType = foundationArr[1]
    foundationCategoriesList.push(
      <button
        onClick={MakeupClick}
        className="flat"
        key={index}
        value={foundationCategory}
      >{foundationType} </button>
    )
  }

  )

  let lipstickCategoriesList = []
  lipstickCategories.forEach((lipstickCategory, index) => {
    let lipstickArr = lipstickCategory.split(",")
    let lipstickType = lipstickArr[1]
    lipstickCategoriesList.push(
      <button
        onClick={MakeupClick}
        className="flat"
        // style={{backgroundColor: "pink"}}
        key={index}
        value={lipstickCategory}
      >{lipstickType} </button>
    )
  }

  )

  return (
    <div>


      <div className="container-fluid femmePicture">

        <style type="text/css">
          {`
    .flat {
      background-color: rgb(255, 0, 119);
      color: black;
      font-size:30px;
      margin:3px;
    }
    `}
        </style>

        <div className="row">

          {/* Blush */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Blush</h1>
                  <img src="https://makeup-api.herokuapp.com/assets/blush-ff7992c3d7690d18a9b0224177cfbdedbc036497cf87c393ec01c6a2ef070258.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  {blushCategoriesList}

                </div>
              </div>
            </div>
          </div>

          {/* Bronzer */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>bronzer</h1>
                  <img src="https://makeup-api.herokuapp.com/assets/bronzer-2d423487eea3e4571229bd95689bb4eb4331f05740f3921ede7c7c765c7954b1.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  <button
                    className="flat"
                    onClick={MakeupClick}
                    value="Bronzer,Powder"
                  >Powder</button>

                </div>
              </div>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Eyebrow</h1>
                  <img src="https://makeup-api.herokuapp.com/assets/eyebrow-fc49d8d480ace717203a21fe863c2231970063add91ed2f15181fe8e2d3b96b9.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  <button
                    className="flat"
                    onClick={MakeupClick}
                    value="Eyebrow,Pencil"
                  >Powder</button
                  >

                </div>
              </div>
            </div>
          </div>

          {/* Eyeliner */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Eyeliner </h1>
                  <img src="https://makeup-api.herokuapp.com/assets/eyeliner-de329b6d65d721a45190051af1153e23202df9eb1c393d1ac65972376ee42d50.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  {eyelinerCategoriesList}

                </div>
              </div>
            </div>
          </div>


          {/* Eyeshadow */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Eyeshadow </h1>
                  <img src="https://makeup-api.herokuapp.com/assets/eyeshadow-67f9f8fd19df1862c95122f9b3460c7e6674d5a6d178cde00e6e4be908dd898a.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  {eyeshadowCategoriesList}

                </div>
              </div>
            </div>
          </div>


          {/* Foundation */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Foundation </h1>
                  <img src="https://makeup-api.herokuapp.com/assets/foundation-9985c8a404d4a19cf7a2985ed504958cadd9f71252a73c90b6a7178bf7075143.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  {foundationCategoriesList}

                </div>
              </div>
            </div>
          </div>

          {/* Lip Liner */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Lip Liner</h1>
                  <img src="https://makeup-api.herokuapp.com/assets/lip_liner-3f40bb63957aa7d47e3a2d1356b9380aa093271e5d58f3518181fd427e388d93.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  <button
                    className="flat"
                    onClick={MakeupClick}
                    value="Lip liner,Pencil"
                  >Pencil</button>

                </div>
              </div>
            </div>
          </div>


          {/* Lipstick */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Lipstick </h1>
                  <img src="https://makeup-api.herokuapp.com/assets/lipstick-4531b48ee71839393857e24c8cbc4dede1f99d2284ef82a6eb0a2a4d03540a14.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  {lipstickCategoriesList}

                </div>
              </div>
            </div>
          </div>

          {/* Mascara */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Mascara</h1>
                  <img src="https://makeup-api.herokuapp.com/assets/mascara-0deeeb81e58f31ddbff07847bfd0820e5ecdba1419f4281da743a05e0d6b3e69.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  <button
                    className="flat"
                    onClick={MakeupClick}
                    value="Mascara, "
                  >View All</button>

                </div>
              </div>
            </div>
          </div>

          {/* Nail Polish */}
          <div className="col-lg-4 col-md-6">

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Nail Polish</h1>
                  <img src="https://makeup-api.herokuapp.com/assets/nail_polish-a7e7204834c0c30e8b57a1ba9896656331e228b0daa09d1705d1ab29bc0b7151.svg" className="image"></img>
                </div>
                <div className="flip-card-back">
                  <button
                    className="flat"
                    onClick={MakeupClick}
                    value="Nail Polish, "
                  >View All</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
