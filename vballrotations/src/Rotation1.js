import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import "./index.css"
import R1Serve from "./images/R1Serve.png"
import R1SR from "./images/R1SR.png"

function Rotation1 () {
    return(
        <div className="pb-32">

            <h1 className="text-4xl text-center pt-16 font-bold">Rotation 1</h1>


            <h2 className="text-center p-8 text-2xl font-semibold">R1 Serve</h2>
            <div className="flex justify-around">


                <div className="pl-12 pt-48">
                    <p>In the first rotation, the setter serves first. </p>
                    <ul>
                        <li>The libero and outside hitter 2 group up and switch when the setter serves to get into base positions.</li>
                        <li>Then the middle blocker, right side, and outside hitter 1, group up. Once the setter serves, the outside hitter and right side hitter will switch to get into base positions.</li>
                    </ul>
                </div>


                <img className="w-1/2" src={R1Serve}/>

            </div>


            <h2 className="text-center p-8 text-2xl font-semibold">R1 Serve Receive</h2>
            <div className="flex justify-around">

                <div className="pl-12 pt-48">
                    <p>Now this rotation will receive a serve from the enemy team.</p>
                    <ul>
                        <li>The right side hitter will back up to the 10 foot line to cover the short serves.</li>
                        <li>The outside hitter 1 will back up to cover the setter, making sure they don't receive. However, the outside hitter cannot go behind the setter until the serve is hit.</li>
                        <li>Once the serve goes over, the setter will run up to the setting position and the other players will receive.</li>
                    </ul>
                </div>

                <img className="w-1/2" src={R1SR}/>

            </div>
            


        </div>
    )
}

export default Rotation1