import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/donation'}>Donation</NavLink></li>
        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img src="/src/assets/images/Logo.png"></img>
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;