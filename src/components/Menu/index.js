import React from "react";
import Logo from '../../assets/image/Logo.png'
import './Menu.css'
import Button from "../Button";
//import ButtonLink from "./components/ButtonLink";

const Menu = () => {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="MilerFlix logo"/>
            </a>

            <Button as='a' href="/" className="ButtonLink">
                Novo Video
            </Button>

        </nav>
    )
}

export default Menu