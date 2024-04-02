import React from 'react'
import LandingHeader from './header'
import LandingFooter from './footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../components/scroll-to-top'

const LandingLayout = () => {
  return (
    <div>
        <LandingHeader/>
            <ScrollToTop/>
            <Outlet/>
        <LandingFooter/>
    </div>
  )
}

export default LandingLayout