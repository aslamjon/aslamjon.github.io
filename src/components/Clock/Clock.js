import React, {useState, useEffect} from 'react'

const Clock = ({type}) => {
    const [time, setTime] = useState('0:00');
    useEffect(() => {
        function addZero(e) {
            return e;
        }
        function getDatee(now) {
            let e = new Date();
            // let t = `${addZero(e.getHours())}:${addZero(e.getMinutes())}`;
            let fullDate = `${String(e)[0] + String(e)[1] + String(e)[2]} ${addZero(e.getHours())}:${addZero(e.getMinutes())}`;
            let timeNow = e.toLocaleTimeString();
            let res = timeNow.split(':')
            timeNow = `${res[0]}:${res[1]} ${res[2].split(' ')[1]}`
            
            if (now === "now") return timeNow;
            else return fullDate;
        }
        setTime(getDatee(type));
        setInterval(() => {
            if (getDatee(type) !== time) setTime(getDatee(type));
        }, 30000)
        
    }, [])
    return (
        <>
            {time}
        </>
    );
}

export default Clock;
