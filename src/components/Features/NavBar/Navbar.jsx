import './Navbar.css';
import { Link } from 'react-scroll'
import { useState } from 'react';
const Navbar = () => {


    const [isMobile, setIsMobile] = useState(false)
    const List = [
        { title: 'HOME', url: 'home' },
        { title: 'ABOUT ME', url: 'about' },
        { title: 'RESUME', url: 'resume' },
        { title: 'CONTACT', url: 'contact' }
    ]
    const menuList = List.map(({ title, url }, index) => {
        return (
            <li className='pages'>
                <Link
                    activeClass="active"
                    to={url}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={600}
                >
                    {title}
                </Link>
            </li>
        )
    });

    return (
        <nav>
            <div className='logo'>CHEN ZAUDA</div>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => { setIsMobile(false) }}
            >
                {menuList}
            </ul>
            <button className='mobile-menu'
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (
                    <i className='fa fa-times'></i>
                ) : (
                    <i className='fa fa-bars'></i>
                )}
            </button>
        </nav>
    )
}

export default Navbar;