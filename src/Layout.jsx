import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar/SideBar'

function Layout() {
  return (
    <div className='main'>
    <SideBar />
    <Outlet />
    </div>
  )
}

export default Layout