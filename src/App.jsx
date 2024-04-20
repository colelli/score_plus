import './css/scoreplus.scss'

function App() {

  return(
    <div>
      <nav className='navbar bg-primary-500'>
        <div className='container-fluid'>
          <a className='navbar-brand'>
            <img className='logo' src='src/assets/score_plus_logo.svg'></img>
          </a>
          <form className='d-flex' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search...' aria-label='Search'/>
            <button className='btn btn-outlinesuccess' type='submit'>Search</button>
          </form>
        </div>
      </nav>
    </div>
  )

}

export default App
