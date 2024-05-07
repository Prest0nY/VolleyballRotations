import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js"
import BasePositions from './BasePositions.js';
import Rotation1 from './Rotation1.js'
import Rotation2 from './Rotation2.js'
import Rotation3 from './Rotation3.js'
import Rotation4 from './Rotation4.js'
import Rotation5 from './Rotation5.js'
import Rotation6 from './Rotation6.js'

function App() {
  return (
    <div className = "pb-16">
        <h1 className="text-6xl text-center p-8 font-extrabold">5 - 1 Volleyball Rotations</h1>

        <p className='text-center px-8 pb-4'>The 5 - 1 volleyball rotation is a style of play that focuses primarily on being offensively powerful. However, defense is still strong with three blockers in the front row. This style ensures that the setter has 5 options to set to when attacking. </p>

        <p className='text-center px-8 pb-4'>In many 5-1 rotations, the right side, or opposite, hitter will receive serves. However, in this specific rotation, the right side hitter does not receive, and only outside hitters, and the libero receive serves.</p>

        <p className='text-center px-8 pb-4'>In this rotation, you will see many players that may seem "out of place" or "rotation" but they are not, they are just making sure the setter and right side hitter do not receive the serve. They are also trying to get the setter closest to the setting position which is in the front row, between the middle blocker and right side hitter.</p>

        <p className='text-center px-8'>Also, base positions will usually only apply when the setter's rotation is in the back row. When the setter is in the front row, they will take the right side hitter's spot, and the right side will hit from behind the 10 foot line. Basically, the setter and right side are opposite positions.</p>
    </div>
  );
}

export default App;
