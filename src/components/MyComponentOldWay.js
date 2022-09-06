import React from 'react';

class MyComponentOldWay extends React.Component {

    constructor(props) {
        super(props);
    }

    //instead of writing a function, now we have 
    //a class....

    //to display stuff we have to create a 
    //"render method"

    render() {
      //HTML like syntax Javascript
      return (<div>
         This is what I want to add to page
         number: {this.props.numberToDisplay}
         person's name: {this.props.valueToDisplay.name}
         person's occupation: {this.props.valueToDisplay.occupation}
       </div>);
    }
}

export default MyComponentOldWay;