import React from 'react';

function MyComponent(props) {

    //HTML like syntax Javascript
    return (<div>
              This is what I want to add to page
              number: {props.numberToDisplay}
              valueToDisplay: {props.valueToDisplay}
            </div>);

}

export default MyComponent;