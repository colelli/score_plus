import './css/scoreplus.scss'
import Navbar from './elements/Navbar'
import Sidebar from './elements/Sidebar'
import Dashboard from './elements/Dashboard'
import History from './elements/History'
import Search from './elements/Search'
import Convert from './elements/Convert'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='w-screen bg-primary-700 font-sans overflow-hidden'>
      <Navbar></Navbar>
      <main className='bg-primary-500 h-[93vh] flex'>
        <Sidebar></Sidebar>
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
