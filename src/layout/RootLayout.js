import React from 'react'
import { Outlet } from 'react-router-dom';

// partials
import RootNavbar from '../partials/RootNavbar';

export default function RootLayout() {
  return (
    <div className="root-layout">
        <RootNavbar/>
        <main>
            {/* this is where the page components will be rendered */}
            <Outlet/>
        </main>
    </div>
  )
}
