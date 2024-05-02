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


                <div>
                    <p>In the first rotation, the setter serves first. </p>
                    <ul>
                        <li>The libero and outside hitter 2 group up and switch when the setter serves to get into base positions.</li>
                        <li>Then the middle blocker, right side, and outside hitter 1, group up. Once the setter serves, the outside hitter and right side hitter will switch to get into base positions.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R1Serve}/>

            </div>


            <h2>R1 Serve Receive</h2>
            <div class="flex justify-around">

                <div>
                    <p>Now this rotation will receive a serve from the enemy team.</p>
                    <ul>
                        <li>The right side hitter will back up to the 10 foot line to cover the short serves.</li>
                        <li>The outside hitter 1 will back up to cover the setter, making sure they don't receive. However, the outside hitter cannot go behind the setter until the serve is hit.</li>
                        <li>Once the serve goes over, the setter will run up to the setting position and the other players will receive.</li>
                    </ul>
                </div>

                <img class="w-1/2" src={R1SR}/>

            </div>
            


        </div>
    )
}

export default Rotation1