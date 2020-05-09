import React from "react";

import './navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';

const Items = {
    Logo: {
        src: "logo.png",
        alt: "logo image"
    },
    ItemsList: [
        {
            href: '/about',
            text: 'About'
        },
        {
            href: '/tests',
            text: 'Tests'
        },
        {
            href: '/contacts',
            text: 'Contacts'
        }
    ]
}

export default class NavBar extends React.Component {
    render() {
        return (
            <ul className="navbar-list">
                <li className="logo"><img src={Logo} alt={Items.Logo.alt}/></li>
                {
                    Items.ItemsList.map((item) =>
                        <li><NavLink exact to={item.href} activeClassName="selected">{item.text}</NavLink></li>)
                }
            </ul>);
    }
}
