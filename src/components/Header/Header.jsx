import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/donation'}>Donation</NavLink></li>
        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>

    </>
    return (
        <div className="fixed top-0 w-full">
            <div className="container mx-auto">
                <div className="navbar justify-between">
                    <div className="">
                        <NavLink>
                            <img src="/src/assets/images/Logo.png"></img>
                        </NavLink>
                    </div>
                    {/* <div className="flex-none"> */}
                        <ul className="menu menu-horizontal px-1 text-lg font-bold">
                            {links}
                        </ul>
                    {/* </div> */}
                </div>
                
            </div>
        </div>
    );
};

export default Header;