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
    <div>
        <Navbar />
        <h1 style={{paddingBottom: '150px'}}>5 - 1 Volleyball Rotations</h1>
        <BasePositions />
        <Rotation1 />
        <Rotation2 />
        <Rotation3 />
        <Rotation4 />
        <Rotation5 />
        <Rotation6 />
    </div>
  );
}

export default App;
