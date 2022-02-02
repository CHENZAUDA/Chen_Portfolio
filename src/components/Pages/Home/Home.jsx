import Profile from "../../Features/Profile/Profile";
import AboutMe from "../AboutMe/AboutMe";
import BlackWave from "../../Features/BlackWave/Wave";
import WhiteWave from "../../Features/WhiteWave/WhiteWave";
import './Home.css';
import Resume from "../Resume/Resume";
import ContactMe from "../ContactMe/ContactMe";

const Home = () => {
    return (
        <div className="home-container">
            <Profile />
           <BlackWave />
           <AboutMe />
         <WhiteWave />
             <Resume />
             <BlackWave />
             <ContactMe /> 
        </div>
    )
}

export default Home