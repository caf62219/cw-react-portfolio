import React from "react";
import { projects } from "../data/projects";
import Project from "../Components/Project";

export default function Portfolio() {
    return (
        <div className="container pt-4">
            <div className="row">
                {projects.map((article) => (
                    <Project article={article} />
                ))}
            </div>
        </div>
    )
}