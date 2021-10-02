import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarStyled } from './NavbarStyle';
import SvgIcon from './../SvgIcon';
import appleLogo from './../../assets/images/apple-logo.svg';
import battery from './../../assets/images/battery-full.png';
import Urls from '../../router/Urls';
import Clock from '../Clock';

const Navbar = () => {
    return (
        <NavbarStyled>
            <ul>
                <li>
                    <Link to={Urls.home} >
                        <SvgIcon src={appleLogo} color="#e4e4e4" className="logo"/>
                    </Link>
                </li>
                <li>
                    <Link to={Urls.projects} >Projects</Link>
                </li>
            </ul>
            <div className="notificationArea">
                <SvgIcon src={battery} color="#e4e4e4" className="notificationArea__battery"/>
                <div className="notificationArea__clock"><Clock /></div>
            </div>
        </NavbarStyled>
    )
}

export default Navbar
