import React from "react"
import "./App.css"
import R6Serve from "./images/R6Serve.png"
import R6SR from "./images/R6SR.png"

function Rotation6 () {
    return(
        <div className="pb-64">
            <h1>Rotation 6</h1>

            <h2>Rotation 6 Serve</h2>
            <div class="flex justify-around">

                <div>
                    <p>The rotation shifts one more time in the sixth and last rotation.</p>
                    <ul>
                        <li>Middle blocker 1 subs in for the libero.</li>
                        <li>The front row groups up, and middle blocker 1 and outside hitter 1 switch after the serve.</li>
                        <li>Outside hitter 2 and the right side hitter group up and the right side will go back right and the outside will stay middle back.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R6Serve}/>


            </div>




            <h2>Rotation 6 Serve Receive</h2>
            <div class="flex justify-around">

                <div>
                    <p>Now the final rotation will serve receive.</p>
                    <ul>
                        <li>The libero subs in for middle blocker 2.</li>
                        <li>The setter will move up to the net to get ready to set or block.</li>
                        <li>Outside hitter 1 will move to back left to receive. Staying in front of outside hitter 2 and to the right of middle blocker 1.</li>
                        <li>The right side will move back to not receive.</li>
                        <li>Middle blocker 1 will receive short serves.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R6SR}/>


            </div>

        </div>
    )
}

export default Rotation6