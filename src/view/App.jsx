import './css/scoreplus.scss'
//components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import NewResearchPopup from './components/NewResearchPopup'
//pages
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Search from './pages/Search'
import Convert from './pages/Convert'
import NewResearch from './pages/NewResearch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { classNames } from './utils/Utils'

function App() {

  const [isResearchOpen, setIsResearchOpen] = useState(false)

  return (
    <div className='w-screen bg-primary-700 font-sans overflow-hidden' id='main-container'>
      <NewResearchPopup isOpen={isResearchOpen} setIsOpen={setIsResearchOpen}/>
      <Navbar isOpen={isResearchOpen} setIsOpen={setIsResearchOpen}/>
      <main className={classNames(isResearchOpen?'blur-sm':'','bg-primary-500 h-[93vh] flex')}>
        <Sidebar/>
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/history' element={<History />} />
            <Route path='/search' element={<Search />} />
            <Route path='/convert' element={<Convert />} />
            <Route path='/newresearch' element={<NewResearch/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )

}

export default App
