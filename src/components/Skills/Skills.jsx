import React from 'react'
import "./Skills.css"
import Heading from '../Heading/Heading'
import SkillsCard from '../SkillsCard/SkillsCard'

const Skills = () => {
    return (
        <div id='skills'>
            <Heading data="Skills" />
            <div className="skills-grid">
                <SkillsCard img="resourses/html-img.png" title="HTML5" />
                <SkillsCard img="resourses/css-img.png" title="CSS3" />
                <SkillsCard img="resourses/js-img.png" title="Javascript" />
                <SkillsCard img="resourses/reactjs-img.png" title="reactjs" />
                <SkillsCard img="resourses/mysql-img.png" title="Mysql  " />
                <SkillsCard img="resourses/php-img.png" title="php" />
                <SkillsCard img="resourses/figma-img.png" title="figma" />
                <SkillsCard img="resourses/canva-img.png" title="canva" />
                <SkillsCard img="resourses/powerbi-img.png" title="power bi" />
            </div>
        </div>
    )
}

export default Skills
