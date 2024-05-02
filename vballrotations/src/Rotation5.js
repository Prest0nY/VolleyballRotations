import React from "react"
import "./App.css"
import R5Serve from "./images/R5Serve.png"
import R5SR from "./images/R5SR.png"

function Rotation5 () {
    return(
        <div className="pb-64">
            <h1>Rotation 5</h1>


            <h2>Rotation 5 Serve</h2>
            <div>
                <p></p>
                <img class="w-1/2" src={R5Serve}/>
            </div>


            <h2>Rotation 5 Serve Receive</h2>
            <div>
                <p></p>
                <img class="w-1/2" src={R5SR}/>
            </div>


        </div>
    )
}

export default Rotation5