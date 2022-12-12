import React from 'react'
import GridComplexForm from '.'


const Link = () => {

    const addOrEditCartaR = (CartaR) => {
        console.log(CartaR)
    }

  return (  
    <div>
        <GridComplexForm addOrEditCartaR={addOrEditCartaR}/>
    </div>
  )
}

export default Link;