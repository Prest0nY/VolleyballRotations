import React from "react"
import "./App.css"
import BPositions from "./images/BasePositions.png"

function BasePositions () {
    return(
        <div className="pb-64">

            <h1>Base Positions</h1>

            <div>
                <img src={BPositions}/>
                <p></p>
            </div>
        </div>
    )
}

export default BasePositions