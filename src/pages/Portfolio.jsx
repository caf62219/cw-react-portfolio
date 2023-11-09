import React from "react";
import  {workData}  from "../data/projects";
import Project from "../Components/Project";

export default function Portfolio() {
    return (
        <div className="container pt-4">
            <div className="row">
                {workData.map((article) => (
                    <Project article={article} key={article.id} />
                ))}
            </div>
        </div>
    )
}