import {useState, useEffect} from 'react';
import '../Timer.css'

export default function Timer({gameOver}) {
    const [counter, setCounter] = useState(0);
    useEffect(() =>{
        if(!gameOver)
            setTimeout(()=>setCounter(counter + 1), 1000);
    }, [counter]);

    let winnerEmoji = <p className='winner-emoji'>👑</p>;

    return (
        <div className="timer">
        {gameOver?winnerEmoji:null}
        {counter}
        </div>
    )
}