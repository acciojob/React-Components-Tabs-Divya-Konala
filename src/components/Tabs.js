import React from 'react'
import { Link } from 'react-router-dom'

const Tabs=()=>{
    return <div className='tabs'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/features'>Features</Link>
    </div>
}

export default Tabs