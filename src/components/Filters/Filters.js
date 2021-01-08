import React from 'react'
import { Form, Nav } from "react-bootstrap"
import { useStateValue } from "../../StateProvider"
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

    if (isChecked){
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
      // code block
      break;
    case "bronzer":
      // code block
      break;
    case "eyebrow":
      // code block
      break;
    case "eyeliner":
      // code block
      break;
    case "eyeshadow":
      // code block
      break;
    case "foundation":
      // code block
      break;
    case "lip_liner":
      // code block
      break;
    case "lipstick":
      // code block
      break;
    case "mascara":
      // code block
      break;
    case "nail_polish":
      // code block
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
      >
      </Form.Check>
    )
  }

  )

  return (
    <div>
      <h1>Filters</h1>

      <div className="filters">

        <ul>
          {filtersArr}
        </ul>
        {/* <h2>Blush certifications</h2>
        <ul>
          {blushCertificationsList}
        </ul>
        <h2>Blush Miscellaneous</h2>
        <ul>
          {blushMiscellaneousList}
        </ul> */}

      </div>
    </div>
  )
}

export default Tags