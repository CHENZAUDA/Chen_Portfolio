import { useState } from 'react';
import './resume.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Projects = () => {
    const [slideIndex, setSlideIndex] = useState(0)



    const projectsData = [
        {
            id: 1,
            image: 'https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png',
            name: 'netflix',
            description: 'netflix',
            site: '',
            github: ''
        },
        {
            id: 2,
            image: '',
            name: 'e-commeres',
            description: '',
            site: '',
            github: ''
        },
        {
            id: 3,
            image: '',
            name: 'resturant',
            description: '',
            site: '',
            github: ''
        },
        {
            id: 4,
            image: '',
            name: 'real-estate',
            description: '',
            site: '',
            github: ''
        },
        {
            id: 5,
            image: '',
            name: 'real-estate',
            description: '',
            site: '',
            github: ''
        },
        {
            id: 6,
            image: '',
            name: 'real-estate',
            description: '',
            site: '',
            github: ''
        },
    ]

    const length = projectsData.length;
    const nextSlide = () => {
        setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1)

    }
    const prevSlide = () => {
        setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1)
    }


    if (!Array.isArray(projectsData) || projectsData.length <= 0) {
        return null;
    }
    return (
        <div id='resume/project' className="project-container">
            <b>Projects:</b>
            {projectsData.map((project, index) => {
                return (
                    <div
                        key={project.id}
                        className={index === slideIndex ? "project-card:active" : "project-card"}>
                        {index === slideIndex ? (
                            <div className="project">
                                <img src={project.image} width="130px" alt="" />
                                <h3>{project.name}</h3>
                                <div className='project-context'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, vel? Necessitatibus, reprehenderit cumque.</div>
                                <a href={project.site}>
                                    <button className="highlighted-btn">Site</button>
                                </a>
                                <a href={project.github}>
                                    <button className="primary-btn">GitHub</button>
                                </a>
                            </div>
                        ) : ''}
                    </div>
                )
            })}
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        </div>
    )
}

export default Projects
