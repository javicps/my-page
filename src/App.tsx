import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Professional from './pages/Professional'
import Writing from './pages/Writing'
import About from './pages/About'

import Story from './pages/Story'
import './App.scss'

import Footer from './components/Footer'
import Menu from './components/Menu'
import { PAGE_MODE } from './constants/PageMode'

const App = () => {
  const [pageMode, setPageMode] = useState(() => {
    const pageModeFromStorage = window.localStorage.getItem('page_mode')
    if (pageModeFromStorage) return pageModeFromStorage
    return false
  })

  const togglePageMode = () => {
    const newPageMode =
      pageMode === PAGE_MODE.LIGHT ? PAGE_MODE.DARK : PAGE_MODE.LIGHT
    setPageMode(newPageMode)
    window.localStorage.setItem('page_mode', newPageMode)
  }

  const dark: string = pageMode === PAGE_MODE.DARK ? 'dark' : ''

  return (
    <div className={dark ? 'main dark-mode' : 'main light-mode'}>
      <Menu currentMode={dark} />
      <div className="content">
        <Routes basename="/my-page">
          <Route path="/" element={<About />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:id" element={<Story />} />
        </Routes>
      </div>
      <Footer pageMode={dark} togglePageMode={togglePageMode} />
    </div>
  )
}

export default App
