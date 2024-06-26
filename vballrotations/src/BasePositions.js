import React from "react"
import "./App.css"
import BPositions from "./images/BasePositions.png"

function BasePositions () {
    return(
        <div className="pb-32" id="basepositions">

            <h1 className="text-center text-4xl pb-16 font-bold">Base Positions</h1>

            <div class="flex justify-around pl-12">
                <p className="pt-48 leading-8">The base positions are the positions that all the players will try to get to, when the setter is in the back row. These positions ensure that the setter is closest to the setting position.</p>
                <img class="w-1/2" src={BPositions}/>
            </div>


        </div>
    )
}

export default BasePositions