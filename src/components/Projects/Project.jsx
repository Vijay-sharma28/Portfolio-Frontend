import React from 'react'
import './Project.css'
import Heading from '../Heading/Heading'
import ProjectCard from '../ProjectCard/ProjectCard'

const Project = () => {
    return (
        <div id='projects'>
            <Heading data="Projects" />
            <div className="project-grid">
                <ProjectCard img="../../resourses/weather-app.png" link="https://weather-app-zeta-one-35.vercel.app/" title="Weather App" tech="React.JS/TailwindCSS/AXIOS" />
                <ProjectCard img="../../resourses/Grocery-shop.png" link="https://pawanbuildmart.gt.tc/" title="Grocery Shop" tech="html/css/js/php/mysql" />
                <ProjectCard img="../../resourses/todo-list1.png" link="https://todo-list-sandy-two-48.vercel.app/" title="Todo List" tech="React.JS/TailwindCSS" />
                <ProjectCard img="../../resourses/online-attendance-system.png" link="https://online-attendance-system.gt.tc/" title="Online Attendance System" tech="html/css/js/php/mysql" />
                <ProjectCard img="../../resourses/netflix-clone.png" link="https://netflix-clone-xi-ten-34.vercel.app/" title="Netflix clone" tech="html/css" />
                <ProjectCard img="../../resourses/tic-tac-toe.png" link="https://tic-tac-toe-mauve-phi.vercel.app/" title="Tic-Tac-Toe" tech="html/css/js" />
                <ProjectCard img="../../resourses/calculator.png" link="https://calculator-lovat-eight-57.vercel.app/" title="Calculator" tech="html/css/js" />
                <ProjectCard img="../../resourses/todo-app.png" link="https://todo-app-vijayy.netlify.app/" title="Todo App" tech="html/css/js" />
                <ProjectCard img="../../resourses/college-event.png" link="https://college-event-management.gt.tc/" title="college event management" tech="html/css/php/mysql" />
                <ProjectCard img="../../resourses/college-site.png" link="https://college-website.gt.tc/" title="college website" tech="html/css/php/mysql" />
                <ProjectCard img="../../resourses/shopping-site.png" link="https://shopping-website.gt.tc/" title="shopping website" tech="html/css/php/mysql" />
            </div>
        </div>
    )
}

export default Project
