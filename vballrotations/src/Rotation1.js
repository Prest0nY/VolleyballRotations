import React from "react"
import "./App.css"
import R1Serve from "./images/R1Serve.png"
import R1SR from "./images/R1SR.png"

function Rotation1 () {
    return(
        <div className="pb-64">

            <h1>Rotation 1</h1>


            <h2>R1 Serve</h2>
            <div>
                <p></p>
                <img src={R1Serve}/>
            </div>


            <h2>R1 Serve Receive</h2>
            <div>
                <p></p>
                <img src={R1SR}/>
            </div>
            


        </div>
    )
}

export default Rotation1