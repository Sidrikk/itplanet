import * as React from "react"
import { Link } from "gatsby"

import logoImg from "../../images/logo.png"
import logoText from "../../images/logo-title.png"
import profileImg from "../../images/user-profile.png"

import './header.css';


const Header = () => (
    <header>
        <div className="logo">
            <img src={logoImg} alt="Логотип" />
            <img src={logoText} alt="Методы и средства проектирования в ИС" />
        </div>
        <div className="header-menu">
            <ul>
                <li id="active-link"><a href="#">Лекции</a></li>
                <li><a href="#">Курсовой проект</a></li>
                <li><a href="#">Дополнительные материалы</a></li>
                <li><a href="#">Тесты</a></li>
            </ul>
            <div className="user-profile">
                <img src={profileImg} alt="Профиль пользователя" />
            </div>
        </div>
    </header>
)

export default Header
