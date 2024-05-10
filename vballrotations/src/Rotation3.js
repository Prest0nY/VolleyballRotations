import React from "react"
import "./App.css"
import R3Serve from "./images/R3Serve.png"
import R3SR from "./images/R3SR.png"

function Rotation3 () {
    return(
        <div className="pb-32" id="rotation3">
            <h1 className="text-4xl text-center pt-16 font-bold">Rotation 3</h1>




            <h2 className="text-center p-8 text-2xl font-semibold">Rotation 3 Serve</h2>
            <div class="flex justify-around">

                <div className="pl-12 pt-48">
                    <p>The libero can't play front row, so the other middle blocker takes their place in the front row. They also can't serve so the first middle blocker serves.</p>
                    <ul className="leading-8">
                        <li>The front row will group up to get into base positions.</li>
                        <li>The setter and back outside hitter group up to get into base positions.</li>
                        <li>Middle blocker 1 will take the libero's place and play back left.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R3Serve}/>


            </div>



            <h2 className="text-center p-8 text-2xl font-semibold">Rotation 3 Serve Receive</h2>
            <div class="flex justify-around">

                <div className="pl-12 pt-48">
                    <p>Rotation 3 will now serve receive. The libero is back in rotation to receive, they replace middle blocker 1.</p>
                    <ul className="leading-8">
                        <li>The setter moves up behind middle blocker 2.</li>
                        <li>Outside hitter 2 will move to back right to receive. But they have to stay in front of outside hitter 1. They also have to stay to the right of middle blocker 2.</li>
                    </ul>
                </div>


                <img class="w-1/2" src={R3SR}/>


            </div>



        </div>
    )
}

export default Rotation3