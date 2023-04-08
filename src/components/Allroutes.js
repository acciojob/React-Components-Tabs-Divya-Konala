import React from 'react'
import Tabs from './Tabs'
import Home from './Home'
import About from './About'
import Features from './Features'

import {Routes,Route} from 'react-router-dom'
import Viewport from './Viewport'

const Allroutes=()=>{
    return <div className='Allroutes'>
        <Tabs/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/features' element={<Features/>}/>
        </Routes>
        <Viewport/>
    </div>
}

export default Allroutes