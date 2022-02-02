import { NavLink } from 'react-router-dom';

import classes from './Sidebar.css';

// const List = [
//     { title: 'HOME', url: 'home' },
//     { title: 'ABOUT ME', url: 'about' },
//     { title: 'RESUME', url: 'resume' },
//     { title: 'CONTACT', url: 'contact' }
// ]
// const menuList = List.map(({ title, url }, index) => {
//     return (
//         <li className='pages'>
//             <Link
//                 activeClass="active"
//                 to={url}
//                 spy={true}
//                 smooth={true}
//                 offset={-60}
//                 duration={600}
//             >
//                 {title}
//             </Link>
//         </li>
//     )
// });

// return (
//     <nav>
//         <div className='logo'>CHEN ZAUDA</div>
//         <ul className="header">
//             {menuList}
//        </ul>
//     </nav>
// )
// }


const Sidebar = () => {

    // const List = [
//     { title: 'Education', url: 'resume/education' },
//     { title: 'Programing Skills', url: 'resume/programing_skills' },
//     { title: 'Projects', url: 'resume/projects' },
//     { title: 'Interest', url: 'resume/Interest' }
// ]

// const menuList = List.map(({ title, url }, index) => {
//     return (
//         <li className='list'>
//             <Link
//                 activeClass="active"
//                 to={url}
//                 spy={true}
//                 smooth={true}
//                 offset={-60}
//                 duration={600}
//             >
//                 {title}
//             </Link>
//         </li>
//     )
// });
    return (
        <div className={classes.div}>
            <ul>
                <li className="list">
                    <NavLink
                        className={(navData) => (navData.isActive ? classes.active : '')}
                        activeClass="active"
                        to='/resume/education'

                    >
                        <p className="category">
                            Education
                        </p>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink
                        className={(navData) => (navData.isActive ? classes.active : '')}
                        to='/resume/programing_skills'
                    >
                        <p className="category">
                            Programing Skills
                        </p>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink
                        className={(navData) => (navData.isActive ? classes.active : '')}
                        to='/resume/projects'
                    >
                        <p className="category">
                            Projects
                        </p>
                    </NavLink>
                </li>
                <li className="list">
                    <NavLink
                        className={(navData) => (navData.isActive ? classes.active : '')}
                        to='/resume/interest'
                    >
                        <p className="category">
                            Interest
                        </p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;