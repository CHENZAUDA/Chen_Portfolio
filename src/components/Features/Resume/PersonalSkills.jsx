import SkillBar from "../Skill/SkillBar"
import'./resume.css'
const PersonalSkills = () => {
    return (
        <div id='resume/personal-skill' className='skill-container'>
            <b>Programing Skills:</b>
            
            <SkillBar skillName="HTML" skillLevel={100} />
            <SkillBar skillName="CSS" skillLevel={60} />
            <SkillBar skillName="JAVASCRIPT" skillLevel={90} />
            <SkillBar skillName="C#" skillLevel={80} />
            <SkillBar skillName="REACT" skillLevel={80} />
            <SkillBar skillName="REDUX" skillLevel={80} />
        </div>
    )
}

export default PersonalSkills
