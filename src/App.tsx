import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Professional from './pages/Professional'
import Writing from './pages/Writing'
import About from './pages/About'

import StoryPage from './pages/StoryPage'
import './App.scss'

import Footer from './components/Footer'
import Menu from './components/Menu'
import { PAGE_MODE } from './constants/PageMode'

const App = () => {
  const [pageMode, setPageMode] = useState<PAGE_MODE>(() => {
    const pageModeFromStorage: string | null =
      window.localStorage.getItem('page_mode')
    if (pageModeFromStorage && pageModeFromStorage === PAGE_MODE.DARK)
      return PAGE_MODE.DARK
    return PAGE_MODE.LIGHT
  })

  const togglePageMode = () => {
    const newPageMode: PAGE_MODE =
      pageMode === PAGE_MODE.LIGHT ? PAGE_MODE.DARK : PAGE_MODE.LIGHT
    setPageMode(newPageMode)
    window.localStorage.setItem('page_mode', newPageMode)
  }

  const pageModeString: string =
    pageMode === PAGE_MODE.DARK ? 'main dark-mode' : 'main light-mode'
  return (
    <div className={pageModeString}>
      <Menu currentMode={pageMode} />
      <div className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:id" element={<StoryPage />} />
        </Routes>
      </div>
      <Footer pageMode={pageMode} togglePageMode={togglePageMode} />
    </div>
  )
}

export default App
