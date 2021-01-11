import { Form } from "react-bootstrap"
import { useStateValue } from "../../StateProvider"
import React from 'react'

import './Filters.css'

function Tags() {

  const [{ searchResults }, dispatch] = useStateValue()

  const addFilteredResults = (data) => {
    dispatch({
      type: 'ADD_FILTERED_RESULTS',
      item: data
    })
  }


  function handleChange(event) {

    let localFilteredResults = searchResults
    let selectedTags = []
    let isChecked = event.target.checked
    let tag = event.target.nextElementSibling.innerText
    let tagIndex = selectedTags.indexOf(tag)

    if (isChecked) {
      selectedTags.push(tag)
      console.log("added", selectedTags)
    } else {
      selectedTags.splice(tagIndex)
      console.log("removed", selectedTags)

    }

    // targets checkbox value

    //loops over filtered Results Array
    for (let index = 0; index < selectedTags.length; index++) {
      localFilteredResults = localFilteredResults.filter(result => result.tag_list.includes(selectedTags[index]))
    }
    // console.log(localFilteredResults)

    addFilteredResults(localFilteredResults)
  }

  let tagArr = []

  switch (searchResults[0]?.product_type) {
    case "blush":
      tagArr = [
        "Vegan",
        "Gluten Free",
        "Organic",
        "Hypoallergenic",
        "EWG verified",
        "USDA Organic",
        "CertClean",
        "purpicks",
        "Natural",
        "Canadian",
        "Non-GMO",
        "No Talc"
      ]
      break;
    case "bronzer":
      tagArr = [
        "Vegan",
        "Gluten Free",
        "Canadian",
        "Natural",
        "Organic",
        "purpicks",
        "EWG verified",
      ]
      break;
    case "eyebrow":
      tagArr = [
        "purpicks",
        "EWG verified",
      ]
      break;
    case "eyeliner":
      tagArr = [
        "Vegan",
        "Natural",
        "Canadian",
        "Gluten Free",
        "Organic",
        "purpicks",
        "CertClean",
        "EWG verified",
        "Hypoallergenic",
        "No Talc",
        "EcoCert"
      ]
      break;
    case "eyeshadow":
      tagArr = [
        "Vegan",
        "Canadian",
        "Natural",
        "Gluten Free",
        "Non-GMO",
        "purpicks",
        "CertClean",
        "EWG verified",
        "Organic",
        "USDA Organic",
        "Hypoallergenic",
        "No Talc",
        "EcoCert"
      ]
      break;
    case "foundation":
      tagArr = [
        "Vegan",
        "Canadian",
        "Natural",
        "Gluten Free",
        "purpicks",
        "CertClean",
        "EWG verified",
        "Hypoallergenic",
        "No Talc",
        "water free",
        "cruely free",
        "alcohol free",
        "oil free",
        "silicone free"
      ]
      break;
    case "lip_liner":
      tagArr = [
        "Vegan",
        "Canadian",
        "Natural",
        "Gluten Free",
        "purpicks",
        "EWG verified",
        "Hypoallergenic",
        "No Talc",
        "cruely free",
      ]
      break;
    case "lipstick":
      tagArr = [
        "Vegan",
        "Canadian",
        "Natural",
        "Gluten Free",
        "Non-GMO",
        "Peanut Free Product",
        "cruely free",
        "Organic",
        "purpicks",
        "CertClean",
        "EWG verified",
        "Hypoallergenic",
        "Chemical Free",
        "No Talc",

      ]
      break;
    case "mascara":
      tagArr = [
        "Vegan",
        "Canadian",
        "Natural",
        "Gluten Free",
        "Organic",
        "purpicks",
        "EWG verified",
        "Hypoallergenic",
        "No Talc",
        "EcoCert",
        "USDA Organic",
        "CertClean",
      ]
      break;
    case "nail_polish":
      tagArr = [
        "Vegan",
        "Canadian",
        "Natural",
        "Gluten Free",
        "Fair Trade",
        "Sugar Free",
        "Dairy Free",
        "Non-GMO",
      ]
      break;
    default:
    // code block
  }



  let filtersArr = []
  tagArr.forEach((tag, index) => {
    filtersArr.push(
      <Form.Check
        type="checkbox"
        key={index}
        label={tag}
        onChange={handleChange}
        className="filter_type"
      >
      </Form.Check>
    )
  }

  )

  return (
    <div>

      <div className="filters">
        <h1 className="filters_header">Filters</h1>

        <style type="text/css">

          {`
.filter_type{
  color:rgb(255, 0, 119);
  padding:3px;
}
`}
        </style>
        <ul>
          {filtersArr}
        </ul>

      </div>
    </div>
  )
}

export default Tags