 //imports react
 import React from 'react';

 //resume function that renders the proficiencies and skills
 export default function Resume() {
    return (
        <div>
            <div>
                <br></br>
                <br></br>   
                <h3 style= {{color: "#3E4851"}}>Proficiencies</h3>
                <h4 style= {{color: "#3E4851"}}> Software/Programming Languages </h4>
                <ul style= {{color: "#3E4851"}} className= "list-unstyled">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>node.js</li>
                    <li>express.js</li>
                    <li>React</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Jest</li>
                </ul>
                <br></br>   
                <br></br>
                <h4 style= {{color: "#3E4851"}}>Skills</h4>
                <ul style= {{color: "#3E4851"}} className="list-unstyled">
                    <li> Technical Documentation</li>
                    <li> Responsive Design</li>
                    <li> Web Accessibility</li> 
                    <li> Debugging and Troubleshooting</li> 
                    <li> Web Application Optimization</li>  
                    <li> Clean and Maintainable code</li>   
                    <li>Technical Documentation</li>
                </ul> 
            </div>
           <br></br>
           <br></br>   
           <a href='src\assets\resume\Chelsea-Wagner-Portfolio-Resume.pdf'  download >
                <button type="button" className="btn btn-primary">Download Resume</button>
           </a>
        </div>
    )
}