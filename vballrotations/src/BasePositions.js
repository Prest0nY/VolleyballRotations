import React from "react"
import "./App.css"
import BPositions from "./images/BasePositions.png"

function BasePositions () {
    return(
        <div className="pb-64">

            <h1>Base Positions</h1>

            <div class="flex justify-around">
                <p>The base positions are the positions that all the players will try to get to, when the setter is in the back row. These positions ensure that the setter is closest to the setting position.</p>
                <img class="w-1/2" src={BPositions}/>
            </div>


        </div>
    )
}

export default BasePositions