import React, {useState} from 'react'

import { TaskbarStyled } from './TaskbarStyle'
import bin from '../../assets/images/RecycleBinFull.png'
import emptyBin from '../../assets/images/RecycleBinEmpty.png'


const Taskbar = ({ recycleBin, setRecycleBin, taskbar }) => {
    const [recycle, setRecycle] = useState(false);
    console.log(recycle)
    return (
        <TaskbarStyled recycle={recycle} >
            <div className="taskbar">
                <div className="taskbar__items">

                </div>
                <div className="taskbar__recycleBin">
                    <div className="taskbar__recycleBin__button" onClick={() => setRecycle(!recycle)}>
                        <img src={recycleBin[0] ? bin : emptyBin} alt="bin" />
                    </div>
                </div>
            </div>
            <div className="taskbar__recycleBin__body">
                <div className="taskbar__recycleBin__body__controlButtons controlButtons">
                    <div className="controlButtons__close"></div>
                    <div className="controlButtons__maximize"></div>
                    <div className="controlButtons__minimize"></div>
                </div>
                <div className="taskbar__recycleBin__body__container">
                    {recycleBin[0] ? null : <div className="taskbar__recycleBin__body__container__empty">Recycle bin is empty</div>}
                    {recycleBin.map((value) => <div className="taskbar__recycleBin__body__container__item">
                        <img src={value.data.desktopLightImg} alt={value.data.name} />
                    </div>)}
                </div>
            </div>
        </TaskbarStyled>
    )
}

export default Taskbar
