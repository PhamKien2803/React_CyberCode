import React from 'react'
import Content from './Components/Content'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import { useState, useEffect } from 'react'
import '../../../App.css'
export default function DemoAPI() {
    const [isOpen, setIsOpen] = useState(false);
    
    
  return (
    <div className='App'>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Content isOpen={isOpen} />
      {isOpen && <Sidebar />}
    </div>
  )
}
