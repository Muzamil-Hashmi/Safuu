import React from 'react'

function Footer() {
  return (
    <div className="row">
  <div className="col-4">
    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav className="nav nav-pills flex-column">
        <a className="btn btn-warning" href="#item-1">Item 1</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
          <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
        </nav>
        <a className="nav-link" href="#item-2">Item 2</a>
        <a className="nav-link" href="#item-3">Item 3</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
          <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
  </div>
  
</div>

  )
}

export default Footer
