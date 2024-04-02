import React from 'react'
import LandingHeader from './header'
import LandingFooter from './footer'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <div>
        <LandingHeader/>
            <Outlet/>
        <LandingFooter/>
    </div>
  )
}

export default LandingLayout