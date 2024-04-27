import './css/scoreplus.scss'
import Navbar from './elements/Navbar'
import Sidebar from './elements/Sidebar'
import Dashboard from './elements/Dashboard'
import History from './elements/History'

function App() {

  return(
    <div className='w-screen bg-primary-700 font-sans overflow-hidden'>
      <Navbar></Navbar>
      <main className='bg-primary-500 h-[93vh] flex'>
        <Sidebar current='dashboard'></Sidebar>
        {/*<Dashboard></Dashboard>*/}
        <History></History>
      </main>
    </div>
  )

}

export default App
