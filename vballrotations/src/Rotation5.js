import React from "react"
import "./App.css"
import R5Serve from "./images/R5Serve.png"
import R5SR from "./images/R5SR.png"

function Rotation5 () {
    return(
        <div className="pb-32" id="rotation5">
            <h1 className="text-4xl text-center pt-16 font-bold">Rotation 5</h1>


            <h2 className="text-center p-8 text-2xl font-semibold">Rotation 5 Serve</h2>
            <div class="flex justify-around">

                <div className="pl-12 pt-48">
                    <p>The rotation shifts over another time so that outside hitter 2 is serving.</p>
                    <ul className="leading-8">
                        <li>Players in the front row will group up, and the setter will go to front right, and middle blocker 2 will go to the middle front.</li>
                        <li>In the back row, the libero and right side will group up. After the serve, the right side will go back right, libero will go back left.</li>
                        <li>After serving, outside hitter 2 will go middle back.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R5Serve}/>


            </div>


            <h2 className="text-center p-8 text-2xl font-semibold">Rotation 5 Serve Receive</h2>
            <div class="flex justify-around">

                <div className="pl-12 pt-48">
                    <p>Now rotation 5 will serve receive.</p>
                    <ul className="leading-8">
                        <li>The setter is now closest to the setting position, so they will stay and go up to the net.</li>
                        <li>Outside hitter 1 will move back to receive while staying in front of the libero.</li>
                        <li>The right side hitter will back up in between the libero and outside hitter 2, so the right side doesn't have to receive.</li>
                        <li>Middle blocker 2 will cover short serves.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R5SR}/>


            </div>


        </div>
    )
}

export default Rotation5