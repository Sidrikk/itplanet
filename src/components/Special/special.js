import * as React from "react"

import './special.css';


const Special = () => {

return (
    <div className="container">
        <div className="special-container">
            <div className="special-images">
                <p>Изображения</p>
                <button className="btn-images-on">Показывать</button>
                <button className="btn-images-off">Не показывать</button>
            </div>
            <div className="special-fontsize">
                <p>Размер шрифта</p>
                <button className="btn-normal-fz">А</button>
                <button className="btn-bigger-fz">А</button>
            </div>
            <div className="special-space">
                <p>Расстояние между буквами</p>
                <button className="btn-normal-space">Стандартное</button>
                <button className="btn-mid-space">Среднее</button>
                <button className="btn-big-space">Большое</button>
            </div>
        </div>
    </div>
)}

export default Special
