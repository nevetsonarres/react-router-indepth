import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam officia vel recusandae in nam totam maiores numquam! Sapiente ullam quae fugiat fuga aliquid molestias consequuntur recusandae dolores assumenda eos</p>
        
        <Outlet/>
    </div>
  )
}