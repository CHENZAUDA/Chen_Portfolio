import Sidebar from "../../Features/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Education from "../../Features/Resume/Education";
import PersonalSkills from "../../Features/Resume/PersonalSkills";
import Projects from "../../Features/Resume/Projects";
import Interest from "../../Features/Resume/Interest";
import './Resume.css'
const Resume = () => {

    return (
        <div id='resume'  className="resume-container">
            <h1>Resume</h1>
            <div className="resume-parent">

             
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="resume-context">
                        
                        <Routes>
                            <Route path="resume/education" element={<Education />} />
                            <Route path="resume/programing_skills" element={<PersonalSkills />} />
                            <Route path="resume/projects" element={<Projects />} />
                            <Route path="resume/interest" element={<Interest />} />
                        </Routes>
                    </div>
               
            </div>
        </div>
    )
}

export default Resume
