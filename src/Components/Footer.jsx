import React from 'react';

export default function Footer() {
   return (
    <div style={{position:"relative", minHeight:"10vh", width:'100%'}}>
       <footer className="features-icons bg-light text-center " style= {{position:'fixed', left:0, bottom:0, right:0, width:'100%'}}>
           <div className="container">
               <div className="row justify-content-center p-2">
                  <div className=" col-1">
                      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                          <div className="features-icons-icon d-flex">
                              <a href="https://github.com/caf62219" target="_blank" rel="noopener noreferrer">
                                 <img src="src/assets/github-mark.png" alt="Github Logo" width="50px" height="50px"/>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className=" col-1 mx-5">
                      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                          <div className="features-icons-icon d-flex">
                              <a href="https://www.linkedin.com/in/chelsea-wagner-a72905277/" target="_blank" rel="noopener noreferrer">
                                 <img src="src/assets/LI-In-Bug.png" alt="LinkedIn Logo" width="50px" height="50px" />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className=" col-1 ">
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
        </div>
   )  }