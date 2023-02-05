import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

// partials
import Navbar from '../partials/Navbar';

export default function RootLayout() {
  return (
    <div className="root-layout">
        <Navbar/>
        <main>
            {/* this is where the page components will be rendered */}
            <Outlet/>
        </main>
    </div>
  )
}
