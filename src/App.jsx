import { useState } from 'react'
import './App.css'

function App() {

  return(
    <div className='container'>
      <div className='navbar'>
        <div className='logo-container'>

        </div>
        <div className='login-container'>
          <img src='src/assets/user.png' className='user-login'></img>
        </div>
      </div>
      <div className='page-container'>
        <div className='sidebar'>
          <div className='sidebar-item button'>
            <img className='sidebar-item-img'></img>
            <div className='sidebar-item-title'>Prova testo</div>
          </div>
          <div className='sidebar-item button'>
            <img className='sidebar-item-img'></img>
            <div className='sidebar-item-title'>Prova testo 2</div>
          </div>
          <div className='sidebar-item button'>
            <img className='sidebar-item-img'></img>
            <div className='sidebar-item-title'>Prova testo</div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
