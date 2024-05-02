import React from "react"
import "./App.css"
import R6Serve from "./images/R6Serve.png"
import R6SR from "./images/R6SR.png"

function Rotation6 () {
    return(
        <div className="pb-64">
            <h1>Rotation 6</h1>

            <h2>Rotation 6 Serve</h2>
            <div>
                <p></p>
                <img class="w-1/2" src={R6Serve}/>
            </div>

            <h2>Rotation 6 Serve Receive</h2>
            <div>
                <p></p>
                <img class="w-1/2" src={R6SR}/>
            </div>

        </div>
    )
}

export default Rotation6