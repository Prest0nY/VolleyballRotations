import React from "react"
import "./App.css"
import { Link, animateScroll as scroll} from "react-scroll"

function Navbar () {
    return(
        
        <nav className="fixed top-0 inline-block mr-20px">
        {/* <nav> */}
            <div className=" flex justify-around pt-8 text-2xl font-medium">
                <div>
                    <Link
                    activeClass="active"
                    to="basepositions"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        Base Positions 

                    </Link>
                </div>

                |

                <div>
                    <Link
                    activeClass="active"
                    to="rotation1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>

                        Rotation 1

                    </Link>
                </div>

                |

                <div>
                    <Link
                    activeClass="active"
                    to="rotation2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>

                        Rotation 2

                    </Link>
                </div>

                |


                <div>
                    <Link
                    activeClass="active"
                    to="rotation3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>

                        Rotation 3

                    </Link>
                </div>

                |

                <div>
                    <Link
                    activeClass="active"
                    to="rotation4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>

                        Rotation 4

                    </Link>
                </div>

                |

                <div>
                    <Link
                    activeClass="active"
                    to="rotation5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>

                        Rotation 5

                    </Link>
                </div>

                |

                <div>
                    <Link
                    activeClass="active"
                    to="rotation6"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>

                        Rotation 6

                    </Link>
                </div>
            </div>
        </nav>
        
        
        
        
        
        
        
        
        
        
        
        // <div className="flex justify-around pt-8 text-2xl font-medium">
        //     <h3>Base Positions</h3>
        //     <h3>Rotation 1</h3>
        //     <h3>Rotation 2</h3>
        //     <h3>Rotation 3</h3>
        //     <h3>Rotation 4</h3>
        //     <h3>Rotation 5</h3>
        //     <h3>Rotation 6</h3>
        // </div>
    )
}

export default Navbar