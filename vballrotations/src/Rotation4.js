import React from "react"
import "./App.css"
import R4Serve from "./images/R4Serve.png"
import R4SR from "./images/R4SR.png"

function Rotation4 () {
    return(
        <div className="pb-64">
            <h1>Rotation 4</h1>



            <h2>Rotation 4 Serve</h2>
            <div class="flex justify-around">

                <div>
                    <p>The right side will now serve.</p>
                    <ul>
                        <li>In the front row, the setter, middle blocker 2 and outside hitter 2 will group up. Outside hitter 2 and the setter will switch so the setter takes the front right position.</li>
                        <li>In the back row, the libero and outside hitter 1 will group up. Once the serve is hit, the libero will go back right and outside hitter 1 will go middle back.</li>
                        <li>The right side hitter will go back right after serving.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R4Serve}/>


            </div>



            <h2>Rotation 4 Serve Receive</h2>
            <div class="flex justify-around">

                <div>
                    <p>Now rotation 4 will serve receive.</p>
                    <ul>
                        <li>The setter will push to the top left corner with middle blocker 2 pushed up behind them.</li>
                        <li>Outside hitter 2 will back up to back left to receive. They have to stay to the right of middle blocker 2. They also have to stay in front of outside hitter 1 and the libero.</li>
                        <li>The right side hitter will back up into the corner with the libero covering them so they don't have to receive.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R4SR}/>


            </div>


        </div>
    )
}

export default Rotation4