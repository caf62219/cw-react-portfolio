import React from 'react';

export default function Footer() {
   return (
       <footer className="features-icons bg-light text-center m-4 w-100 mt-auto bg-secondary p-4" >
           <div className="container">
               <div className="row justify-content-center p-2">
                  <div className="col-lg-1">
                      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                          <div className="features-icons-icon d-flex">
                              <a href="https://github.com/caf62219" target="_blank" rel="noopener noreferrer">
                                 <img src="src/assets/github-mark.png" alt="Github Logo" width="50px" height="50px"/>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-1">
                      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                          <div className="features-icons-icon d-flex">
                              <a href="https://www.linkedin.com/in/chelsea-wagner-a72905277/" target="_blank" rel="noopener noreferrer">
                                 <img src="src/assets/LI-In-Bug.png" alt="LinkedIn Logo" width="50px" height="50px" />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-1">
                      <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                          <div className="features-icons-icon d-flex">
                              <a href="https://www.instagram.com/caf62219/" target="_blank" rel="noopener noreferrer">
                                 <img src="src/assets/instagram-1581266_1280.webp" alt="Instagram Logo" width="50px" height="50px"/>
                              </a>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </footer>
   )  }