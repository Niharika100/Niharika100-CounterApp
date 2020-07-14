import React, { useEffect } from 'react';

const colorGenerator = () =>{
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

const CounterView = (props) => {

    const {CountValue,changeFunc} = props

    // useEffect(() =>{
    //     console.log("COUNTER VIEW USER EFFECT CALL")
    // },[CountValue])

    return(
        <div style = {{background : colorGenerator()}}>   
            <h2 className = "value"> {CountValue} </h2> 
            <button onClick = {changeFunc(1)}>Increment</button>
            <button onClick = {changeFunc(-1)}>Decrement</button>
        </div>
    )
}

export default React.memo(CounterView);

// first {} is used for javaScript Expression and Second Expression is used for Object

// React.memo is used to re-render the function only when the props are changed