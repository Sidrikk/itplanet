import * as React from "react"
import { Link } from "gatsby"


import './sidebar.css';


const Sidebar = () => (
    <nav>
        <h3>Содержание</h3>
        <ul>
            <li><Link to="../../lections/lection1">Лекция 1</Link></li>
            <li><Link to="../../lections/lection2">Лекция 2</Link></li>
            <li><Link to="../../lections/lection3">Лекция 3</Link></li>
            <li><Link to="../../lections/lection4">Лекция 4</Link></li>
            <li><Link to="../../lections/lection5">Лекция 5</Link></li>
        </ul>
    </nav>
)

export default Sidebar
