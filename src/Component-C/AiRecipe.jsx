import React from 'react'
import ReactMarkdown from "react-markdown"

const AiRecipe = (props) => {
  return (
    <div aria-live='polite'>
       { props.recipe &&  <h1>Chef Claude Recommends:</h1>}
      <ReactMarkdown>
        {props.recipe}
      </ReactMarkdown>
    </div>
  )
}

export default AiRecipe