import React from "react";
import Clicker from "./clicker";

export default function UseState() {
    
    const [clicker, setClicker] = React.useState(false);

  

    return (
        <>
            <button onClick={() => setClicker(!clicker)}>Toggle clicker</button>
            <br/><br/>
			{clicker && <Clicker/>}
        </>
    )
}

