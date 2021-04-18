import React from 'react'
import '../../css/header.css'

export default function header() {
    return (
        <header className="header header_outer">
            <div className="header__wrapper">
                <div>
                    <h1 className="header__title">ARMAGGEDON V</h1>
                    <div className="header__subtitle_size header__subtitle_mt">Сервис мониторинга и уничтожения астеройдов, <br /> опасно подлетающих к Земле.</div>
                </div>
                <div className="header__basket">
                    <span className="header__wrapper_bold header__wrapper_size header__wrapper_mr">Астеройды</span>
                    <span className="header__wrapper_under header__wrapper_size">Уничтожение</span>
                </div>
            </div>
            <span className="header__line header__line_mt"></span>
        </header>
    )
}
