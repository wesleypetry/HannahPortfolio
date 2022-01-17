import React, {useState} from 'react';
import './styles.modules.css';
import HBLogo from './Images/HBLogo.svg'
import { useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';


function HeaderBar(props) {

    const { pathname } = useLocation();
    const [MenuStyle, setMenuState] = useState("MenuDropdown");

    const changeMenuVis = () => {
        if (MenuStyle === "MenuDropdown-clicked") {
            setMenuState("MenuDropdown");
        }
        else {
            setMenuState("MenuDropdown-clicked")
        }
    }

    return (
        <div className="HeaderBar">
            <div className="H1_Logo">
                <div className="HBLogo">
                    <a href="/">
                        <img src={HBLogo} alt="Hannah Braswell Logo"/>
                    </a>
                </div>
                <div className="LogoSpacer"></div>
                <h1 className="H1_Header_Name">Hannah Braswell</h1>
            </div>
            <div className="NavButtons">
                <a href="/" className="H1_Link">
                    <h1 className={pathname === '/' ? "H1_Header_Current" : "H1_Header"}>Work</h1>
                </a>
                <a href="/About" className="H1_Link">
                    <h1 className={pathname === '/About' ? "H1_Header_Current" : "H1_Header"}>About</h1>
                </a>
                <a href="/Hannah Braswell Resume.pdf" target="_blank" className="H1_Link">
                    <h1 className="H1_Header">Resume</h1>
                </a>
                <MenuIcon className="HamburgerMenu" onClick={changeMenuVis}/>
            </div>
            <div className={MenuStyle} onClick={changeMenuVis}>
                <a href="/" className="Menu_Link">
                    <h1 className={pathname === '/' ? "H1_Header_Current" : "H1_Header"}>Work</h1>
                </a>
                <a href="/About" className="Menu_Link">
                    <h1 className={pathname === '/About' ? "H1_Header_Current" : "H1_Header"}>About</h1>
                </a>
                <a href="/Hannah Braswell Resume.pdf" target="_blank" className="Menu_Link">
                    <h1 className="H1_Header">Resume</h1>
                </a>
            </div>
        </div>
    )
}

export default HeaderBar;
