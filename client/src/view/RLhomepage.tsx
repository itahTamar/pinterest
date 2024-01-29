// import React from 'react'
// import { Navbar2 } from '../components/Navbar/Navbar'

import Register from "../components/user/Register"

const RLhomepage = () => {
  return (
    <div>
      {/* <Navbar2/> */}
        <div id='first'>
            <h1>Get the idea</h1>
            <img/>
        </div>
        <div id='second'>
            <img/>
            <h2>Look for an idea</h2>
            <p>What's the next thing you want to try?
                Think of something that interests you and see what you come up with.</p>
            <button>discover</button>         
        </div>
        <div id='third'>
            <h1>register to get your idea</h1>
            <Register/>
            </div>
    </div>
  )
}

export default RLhomepage
