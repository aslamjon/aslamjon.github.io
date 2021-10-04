import React, {useState} from 'react'

import { TaskbarStyled } from './TaskbarStyle'
import bin from '../../assets/images/RecycleBinFull.png'
import emptyBin from '../../assets/images/RecycleBinEmpty.png'


const Taskbar = ({ recycleBin, taskbar, putBack, emptyRecycle }) => {
    const [recycle, setRecycle] = useState(false);
    const [maxRecycle, setMaxRecycle] = useState(false);
    
    const closeHandling = () => {
        if (!maxRecycle) setRecycle(!recycle);
        else {
            setMaxRecycle(!maxRecycle)
            setRecycle(!recycle)
        }
    }
    const styleContent = {
        recycle,
        maxRecycle
    }
    return (
        <TaskbarStyled {...styleContent}>
            <div className="taskbar">
                {taskbar.map((value, index) => <div key={index+1} className={`taskbar__item`}>
                    <img src={value.data.desktopLightImg} alt={value.data.name} onClick={(e) => putBack(e, value.index, index)}/>
                </div>)}
                
                <div className="taskbar__recycleBin">
                    <div className="taskbar__recycleBin__button" onClick={() => setRecycle(!recycle)}>
                        <img src={recycleBin.length ? bin : emptyBin} alt="bin" />
                    </div>
                </div>
            </div>
            <div className="taskbar__recycleBin__body">
                <div className="taskbar__recycleBin__body__controlButtons controlButtons">
                    <div className="controlButtons__close" onClick={() => closeHandling()}></div>
                    <div className="controlButtons__maximize" onClick={() => setMaxRecycle(!maxRecycle)}></div>
                    <div className="controlButtons__minimize" onClick={() => closeHandling()}></div>
                </div>
                <div className="taskbar__recycleBin__body__emptyTrash">
                    Trash
                    <div className="" onClick={emptyRecycle} >Empty</div>
                </div>
                <div className="taskbar__recycleBin__body__container">
                    {recycleBin[0] ? null : <div className="taskbar__recycleBin__body__container__empty">Recycle bin is empty</div>}
                    {recycleBin.map((value, index) => <div key={index+1} className="taskbar__recycleBin__body__container__item">
                        <img src={value.data.desktopLightImg} alt={value.data.name} onClick={(e) => putBack(e, value.index, index, 'recycle')} />
                        <div>{value.data.name}</div>
                    </div>)}
                </div>
            </div>
        </TaskbarStyled>
    )
}

export default Taskbar
