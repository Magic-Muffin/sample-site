import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import '../css/Header.css';

const Header = ({loggedIn}) =>{

    useEffect(()=>{

    }, [loggedIn])

    const userSection = () =>{
        if(loggedIn){
            return(
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            );
            
        }
        return (
            <>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </>
        );
    }

    return(
        <dir className={"header-bar"}>
            <ul className={"header-nav"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/forum">Forum</Link>
                </li>
                <li>
                    <Link to="/showcase">Showcase</Link>
                </li>
            </ul>
            <ul className={"header-user"}>
                {userSection()}
            </ul>
        </dir>
    );
}

export default Header;