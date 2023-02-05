import React from 'react'
import { Outlet } from 'react-router-dom';

// partials
import HelpNavbar from '../partials/HelpNavbar';

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, perspiciatis.</p>
        
        <HelpNavbar />
        <Outlet />
    </div>
  )
}
