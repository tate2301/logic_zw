import React from 'react'

const NavbarLoggedOut = ({user}) => {

    return(
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                      <a className="navbar-item" href="/">
                        <span className="title is-3 text-green-600">logic</span>
                      </a>
                  
                      <a className="navbar-burger burger" data-target="Options">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                      </a>
                    </div>
                  
                    <div id="Options" className="navbar-menu">
                      <div className="navbar-start">
                        <a className="navbar-item">
                          Home
                        </a>
                  
                        <a className="navbar-item">
                          Challenges
                        </a>

                        <a className="navbar-item">
                            Blog
                          </a>
                  
                        <div className="navbar-item has-dropdown is-hoverable">
                          <a className="navbar-link">
                            Resources
                          </a>
                  
                          <div className="navbar-dropdown">
                            <a className="navbar-item">
                              Learn
                            </a>
                            <a className="navbar-item">
                              Example Responses
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                              Submit a challenge
                            </a>
                          </div>
                        </div>
                      </div>
                  
                      <div className="navbar-end">
                        <div className="navbar-item">
                          <div className="buttons">
                            <a href="http://localhost:3000/register" className="btn hover:text-white mr-4 text-white rounded px-4 py-2 bg-green-700">
                              <strong>Get started now</strong>
                            </a>
                            <a href="http://localhost:3000/login" className="btn text-gray-700 rounded px-4 py-2 bg-white">
                              <strong>Login</strong>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
        </>
    )
}

export default NavbarLoggedOut