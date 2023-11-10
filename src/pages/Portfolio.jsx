import React from "react";
import  {workData}  from "../data/projects";
import Project from "../Components/Project";

export default function Portfolio() {
    return (
        <div className="container lg-pt-4 md-pt-6 sm-pt-12">
            <div className="row">
                {workData.map((article) => (
                    <Project article={article} key={article.id} />
                ))}
            </div>
        </div>
    )
}