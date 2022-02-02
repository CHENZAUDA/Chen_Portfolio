import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Features/NavBar/Navbar"



const RouterApp = () => {

    return (
        <div>
            <Navbar/>
            <Router>
                <Routes>
                    <Route  path="/*" element={<Home />} />
                </Routes>
            </Router>

        </div>
    )

}

export default RouterApp
