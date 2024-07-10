import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() =>{
        console.log(inputValue);
    },[inputValue])

    const handleInput = (value) =>{
        setInputValue(value)
    }


    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/donation'}>Donation</NavLink></li>
        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>

    </>
    return (
        <div className="bgImg mb-24">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="flex-1">
                        <NavLink className="btn btn-ghost text-xl">
                            <img src="/src/assets/images/Logo.png"></img>
                        </NavLink>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-lg font-bold">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="text-center absolute inset-48">
                    <h1 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
                    <div className="join">
                        <input onChange={(e) =>handleInput(e.target.value)} className="input input-bordered join-item" placeholder="Search here....." />
                        <button className="btn join-item text-white bg-error">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;