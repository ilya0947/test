import React from "react";

export default function Clicker() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log('click');
        return () => console.log('offClicker');
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count+1)}>+</button>
            <span style={{margin: 10}}>{count}</span>
            <button onClick={() => setCount(count-1)}>-</button>
        </div>
    )
}