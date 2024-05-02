import React from "react"
import "./App.css"
import R4Serve from "./images/R4Serve.png"
import R4SR from "./images/R4SR.png"

function Rotation4 () {
    return(
        <div className="pb-64">
            <h1>Rotation 4</h1>



            <h2>Rotation 4 Serve</h2>
            <div>
                <p></p>
                <img class="w-1/2" src={R4Serve}/>
            </div>



            <h2>Rotation 4 Serve Receive</h2>
            <div>
                <p></p>
                <img class="w-1/2" src={R4SR}/>
            </div>


        </div>
    )
}

export default Rotation4