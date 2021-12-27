import React from "react";

export default function UseTimer() {

    const [count, setCount] = React.useState(0 || +localStorage.getItem('count2'));
    const [timerActive, setTimerActive] = React.useState({timer: false, btnText: "Start"});

    const timerID = React.useRef(null);

    React.useEffect(() => {
        localStorage.setItem('count2', count);
        console.log('da');
    }, [count]);

    // React.useEffect(() => {
    //     setCount(+localStorage.getItem('count2'));
    // }, []);

    const handleUp = () => {
        if (!timerActive.timer) {
            
            timerID.current = setInterval(() => {
                setCount((count) => count + 1);
            }, 1000);
            setTimerActive({timer: !timerActive.timer, btnText: "Stop"});
        } else {
            clearInterval(timerID.current);
            setTimerActive({timer: !timerActive.timer, btnText: "Start"});
        }
    };

    const clearTimer = () => {
        clearInterval(timerID.current);
        localStorage.setItem('count2', 0);
        setTimerActive({timer: !timerActive.timer, btnText: "Start"});
        setCount(0);
    };

    return (
        <div className="App">
            <div>Timer Hooks</div>
            <div>{count}</div>
            <button data-start onClick={() => handleUp()}>{timerActive.btnText}</button>
            <button onClick={() => clearTimer()}>Reset</button>
        </div>
    )
}