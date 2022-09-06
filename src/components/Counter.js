import React from 'react';

function Counter(props) {
    //count right now is an internal
    //variable that react has no knowledge of.

    //So in order to make react know about count we
    //have to tell React that it exists...


    //This creates a component that has an internal
    //React state variable called "count"
    let [count, setCount] = React.useState(113);    

    //We want to hook into this method to get notified
    //when the component mounts, like the lifecycle
    //method "componentDidMount"

    function componentDidMount() {
        console.log("Component did mount here.");
        return () => { console.log("Component did unmount")};
    }

    function componentDidUpdate() {
        console.log("Component did update here.");
    }

    //React.useEffect ------the first parameter
    // is a callback function to call...

    //The second paramater is a list of state and or property variables
    //If a state variable or property variable is changed and it is in the
    //list, the callbackk will be called with that update........

    //if the parameter is an empty list, the function will only
    //be called when the component is mounted.......
    React.useEffect( componentDidMount, []);
    React.useEffect( componentDidUpdate );

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
