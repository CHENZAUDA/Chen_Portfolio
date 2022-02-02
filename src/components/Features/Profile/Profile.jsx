import Typical from 'react-typical'
import './Profile.css';

const Profile = () => {
    return (
        <div id='home' className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://github.com/CHENZAUDA">
                                <i className='fa fa-github-square' ></i>
                            </a>
                            <a href="https://www.linkedin.com/in/chen-zauda-73950316a/">
                                <i className='fa fa-linkedin' ></i>
                            </a>
                            <a href="https://www.facebook.com/chen.zauda/">
                                <i className='fa fa-facebook-square' ></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {""}
                            Hello, I'm <span className="highlighted-text">chen</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        'Full-Stack Dev 💻',
                                        3000,
                                        'MERN-Stack Dev 😎',
                                        3000,
                                        'React/Redux Dev 🌐',
                                        3000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with <br/> front & back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {""}
                            Hire Me {" "}
                        </button>
                        <a href="Chen_CV.pdf" download="chen_resume.docx">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile