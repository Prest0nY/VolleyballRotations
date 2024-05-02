import React from "react"
import "./App.css"
import R1Serve from "./images/R1Serve.png"
import R1SR from "./images/R1SR.png"

function Rotation1 () {
    return(
        <div className="pb-64">

            <h1>Rotation 1</h1>


            <h2>R1 Serve</h2>
            <div class="flex justify-around">
                <p>With the setter serving first, the outside hitter in the back row will switch with the libero to get into base positions. And the right side and outside hitters in the front row will switch to also get into base positions. </p>
                <img class="w-1/2" src={R1Serve}/>
            </div>


            <h2>R1 Serve Receive</h2>
            <div class="flex justify-around">
                <p>Now that this rotation is receiving, the outside hitter in the front row, will move back to cover the setter so they don't have to receive. However, the setter cannot go in front of the outside hitter.</p>
                <img class="w-1/2" src={R1SR}/>
            </div>
            


        </div>
    )
}

export default Rotation1