import React from 'react';

function Counter(props) {
    //count right now is an internal
    //variable that react has no knowledge of.

    //So in order to make react know about count we
    //have to tell React that it exists...


    //This creates a component that has an internal
    //React state variable called "count"
    let [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count+1);
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={handleClick}>
                Increment
            </button>
        </div>
    )
}

export default Counter;
