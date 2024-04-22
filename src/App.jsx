import './css/scoreplus.scss'
import Navbar from './elements/Navbar'
import Sidebar from './elements/Sidebar'

var send = "Invia"
var search = "Cerca"
var file_upload = "File Upload"
var drag_and_drop = "Drag and Drop file"

function App() {

  return(
    <div className='w-screen bg-primary-700'>
      <Navbar></Navbar>
      <main className='bg-primary-500 h-[93vh]'>
        <Sidebar current='dashboard'></Sidebar>
      </main>
    </div>
  )

}

export default App
