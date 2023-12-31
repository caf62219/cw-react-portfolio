// imports
import React from "react";
import  {workData}  from "../data/projects";
import Project from "../Components/Project";

//portfolio function that renders the projects
export default function Portfolio() {
    return (
        <div className="container lg-pt-4 md-pt-6 sm-pt-12">
            <br></br>
            <br></br>
            <div className="row">
               
                {workData.map((article) => (
                    <Project article={article} key={article.id} />
                ))}
            </div>
        </div>
    )
}