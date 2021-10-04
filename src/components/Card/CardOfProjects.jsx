import React, {useState} from 'react'
import { CardOfProductsStyled } from './CardOfProductsStyle'

import battery from '../../assets/images/ios15-battery-status-icon.png';
import wifi from '../../assets/images/ios15-wifi-icon.png';
import signal from '../../assets/images/ios15-cellular-signal-icon.png';
import Clock from '../Clock/Clock';

const CardOfProjects = ({ name, url, desktopLightImg, desktopDarkImg, mobilLightImg, mobilDarkImg, index, close, maximize, minimize }) => {
    const [x, setX] = useState('');
    const context = {
        battery,
        wifi,
        signal,
        desktopLightImg, 
        desktopDarkImg, 
        mobilLightImg, 
        mobilDarkImg,
        x: x.toString()
    }
    return (
        <CardOfProductsStyled {...context}>
            <div className="controlButtons">
                <div className={`controlButtons__close cardOfProjectsIndex${index}`} onClick={(e) => close(e, x, setX, index)}></div>
                <div className="controlButtons__maximize" onClick={maximize}></div>
                <div className={`controlButtons__minimize cardOfTaskbar${index}`} onClick={(e) => minimize(e, x, setX, index)}></div>
            </div>
            <div className="main">
                <div className="main__img">
                    <div className="main__img__viewNow">
                        <div className="main__img__viewNow__container">
                            <div className="main__img__viewNow__container__name">{name}</div>
                            <a href={url} target="_blank" className="main__img__viewNow__container__button" rel="noreferrer">View Now</a>
                        </div>
                    </div>
                </div>
                <div className="main__mobil">
                    <div className="main__mobil__notification">
                        <div className="main__mobil__notification__clock"><Clock type="now" /></div>
                        <div className="main__mobil__notification__imgs">
                            <div className="main__mobil__notification__imgs__signal"></div>
                            <div className="main__mobil__notification__imgs__wifi"></div>
                            <div className="main__mobil__notification__imgs__battery"></div>
                        </div>
                    </div>
                    <div className="main__mobil__img"></div>
                </div>
            </div>
        </CardOfProductsStyled>
    )
}

export default CardOfProjects
