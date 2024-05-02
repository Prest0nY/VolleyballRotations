import React from "react"
import "./App.css"
import R2Serve from "./images/R2Serve.png"
import R2SR from "./images/R2SR.png"

function Rotation2 () {
    return(
        <div className="pb-64">
            <h1>Rotation 2</h1>

            <h2>Rotation 2 Serve</h2>
            <div class="flex justify-around">
                <p></p>
                <img class="w-1/2" src={R2Serve}/>
            </div>


            <h2>Rotation 2 Serve Receive</h2>
            <div class="flex justify-around">
                <p></p>
                <img class="w-1/2" src={R2SR}/>
            </div>
        </div>
    )
}

export default Rotation2