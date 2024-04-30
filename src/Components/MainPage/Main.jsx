import React from 'react'
import NavBar from './NavBar'
import './Main.css'
import Content from './Content'

function Main() {
  return (
    <>
    <div className='main-container'>
      <div className='nav'><NavBar/></div>
      <div className='content'><Content/></div>
    </div>

    </>
  )
}

export default Main
