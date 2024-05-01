import React from "react"
import "./App.css"
import R3Serve from "./images/R3Serve.png"
import R3SR from "./images/R3SR.png"

function Rotation3 () {
    return(
        <div className="pb-64">
            <h1>Rotation 3</h1>

            <h2>Rotation 3 Serve</h2>
            <div>
                <p></p>
                <img src={R3Serve}/>
            </div>



            <h2>Rotation 3 Serve Receive</h2>
            <div>
                <p></p>
                <img src={R3SR}/>
            </div>



        </div>
    )
}

export default Rotation3