import React from "react"
import "./App.css"
import R2Serve from "./images/R2Serve.png"
import R2SR from "./images/R2SR.png"

function Rotation2 () {
    return(
        <div className="pb-32">
            <h1 className="text-4xl text-center pt-16">Rotation 2</h1>

            <h2 className="text-center p-8 text-2xl">Rotation 2 Serve</h2>
            <div class="flex justify-around">

                <div className="pl-12">
                    <p>Now the rotation shifts one time, and one of the outside hitters is serving.</p>
                    <ul>
                        <li>The libero and setter group up. And when the serve is hit, the setter goes to back right to get into base positions.</li>
                        <li>After the serve is hit, outside hitter 1 will go to the middle back position.</li>
                        <li>The front row players will group up. The middle blocker and right side will switch into base positions after the serve is hit.</li>
                    </ul>
                </div>

                <img class="w-1/2" src={R2Serve}/>
                
            </div>


            <h2 className="text-center p-8 text-2xl">Rotation 2 Serve Receive</h2>
            <div class="flex justify-around">

                <div className="pl-12">
                    <p>Now it is rotation 2 serve receive.</p>
                    <ul>
                        <li>The outside hitter 2 will move back to receive. However they cannot go behind the libero or they will be "out of rotation".</li>
                        <li>The setter will go up to the front row behind the right side. But the setter cannot be to the left of the libero or to the right of outside hitter 1.</li>
                        <li>The middle blocker will back up to the 10 foot line to receive short serves.</li>
                    </ul>
                </div>

                <img class="w-1/2" src={R2SR}/>

            </div>


        </div>
    )
}

export default Rotation2