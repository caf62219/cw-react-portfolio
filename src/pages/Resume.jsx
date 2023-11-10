 import React from 'react';

 export default function Resume() {
    return (
        <div>
            <div>
                <h3>Proficiencies</h3>
                <h4> Software/Programming Languages </h4>
                <ul>
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
                <h4>Skills</h4>
                <ul>
                    <li> Technical Documentation</li>
                    <li> Responsive Design</li>
                    <li> Web Accessibility</li> 
                    <li> Debugging and Troubleshooting</li> 
                    <li> Web Application Optimization</li>  
                    <li> Clean and Maintainable code</li>   
                </ul>Technical Documentation 
            </div>
           <br></br>
           <br></br>   
           <a href='src\assets\resume\Chelsea-Wagner-Portfolio-Resume.pdf'  download >
                <button type="button" className="btn btn-primary">Download Resume</button>
           </a>
        </div>
    )
}