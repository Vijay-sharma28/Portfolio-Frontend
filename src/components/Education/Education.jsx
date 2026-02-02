import React from 'react'
import './Education.css'
import Heading from '../Heading/Heading'
import EducationCard from '../EducationCard/EducationCard'

const Education = () => {
    return (
        <div id='education'>
            <Heading data="education" />
            <br />
            <div className="edu-grid">
                <EducationCard img="resourses/designing-course.jpg" heading="Web/Graphic Designer" year="[2024]" data="I have succesfully done my course in Designing (Figma, Canva, Wix, etc.) from Techible/IIT jammu connect program in the year 2024." />

                <EducationCard img="resourses/bachelor.gif" heading="B.Tech in Computer Science" year="[2022-2026]" data="A final year student of B.Tech Computer Science From Punjab Technical University, Jalandhar. Currently in 8th semester." />

                <EducationCard img="resourses/secondary-std.gif" heading="Punjab School Education Board" year="[2021-2022]" data="I have succesfully passout from 12th std. in the year 2022 from Govt. Senior Secondary School, Pathankot & got 91%." />

                <EducationCard img="resourses/higher-std.gif" heading="Punjab School Education Board" year="[2019-2020]" data="I have succesfully passout from 10th std. in the year 2020 from Govt. Senior Secondary School, Pathankot & got 95%." />
            </div>

        </div>
    )
}

export default Education
