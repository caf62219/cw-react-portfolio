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
                <h4>Soft Skills</h4>
            </div>
            <iframe src=”path_to_pdf_file.pdf” width=”100%” height=”500px” />
            <button type="button" class="btn btn-primary">Download Resume</button>
        </div>
    )
}