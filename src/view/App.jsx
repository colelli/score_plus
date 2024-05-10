import './css/scoreplus.scss'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Search from './pages/Search'
import Convert from './pages/Convert'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import NewResearch from './components/NewResearch'
import { classNames } from './utils/Utils'

function App() {

  const [isResearchOpen, setIsResearchOpen] = useState(false)

  return (
    <div className='w-screen bg-primary-700 font-sans overflow-hidden' id='main-container'>
      <NewResearch isOpen={isResearchOpen} setIsOpen={setIsResearchOpen}/>
      <Navbar isOpen={isResearchOpen} setIsOpen={setIsResearchOpen}/>
      <main className={classNames(isResearchOpen?'blur-sm':'','bg-primary-500 h-[93vh] flex')}>
        <Sidebar/>
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/history' element={<History />} />
            <Route path='/search' element={<Search />} />
            <Route path='/convert' element={<Convert />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )

}

export default App
