import * as React from "react"
import { Link } from "gatsby"

import logoImg from "../../images/logo.png"
import logoText from "../../images/logo-title.png"
import profileImg from "../../images/user-profile.png"

import './header.css';


const Header = ({ siteTitle }) => (
    <header>
        <div className="logo">
            <img src={logoImg} alt="Логотип" />
            <img src={logoText} alt="Методы и средства проектирования в ИС" />
        </div>
        <div className="header-menu">
            <ul>
                <li className="active-link">Лекции</li>
                <li>Курсовой проект</li>
                <li>Дополнительные материалы</li>
                <li>Тесты</li>
            </ul>
            <div className="user-profile">
                <img src={profileImg} alt="Профиль пользователя" />
            </div>
        </div>
    </header>
)

export default Header
