import './css/scoreplus.scss'

var send = "Invia"
var search = "Cerca"

function App() {

  return(
    <div>
      <nav className='navbar bg-primary-500 shadow'>
        <div className='container-fluid'>
          <a className='navbar-brand'>
            <img className='logo' src='src/assets/score_plus_logo.svg'></img>
          </a>
          <form className='d-flex' role='search'>
            <input className='form-control me-2' type='search' placeholder={search} aria-label='search'/>
            <button className='btn btn-outlinesuccess' type='submit'>{search}</button>
          </form>
        </div>
      </nav>
      <div className='container-fluid'>
        <div className='row'>
          <div className='sidebar bg-primary-400 col-md-3 col-lg-2'>
            <div className='offcanvas-md offcanvas-start show' tabIndex="-1" id="sidebar" aria-labelledby='sidebar'>
              <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='sidebarLabel'>Score+</h5>
                <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='close'></button>
              </div>
              <div className='offcanvas-body overflow-y-auto p-0 d-md-flex flex-column'>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <a className='nav-link active' aria-current='page' href='#'>Dashboard</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link align-items-center d-flex gap-2' href='#'>
                      <img className='bi' src='assets/img.png'></img>
                      Other
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>Other</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-primary-700'>
            <div className='container-fluid d-flex'>
              <div className='input-group rounded p-3 mb-5 bg-body-tertiary align-items-center d-flex'>
                <input type='text' className='form-control' placeholder='Insert CVE-ID'></input>
                <button type='button' className='btn' datatype='inverted'>{send}</button>
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  )

}

export default App
