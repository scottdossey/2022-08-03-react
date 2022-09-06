import React from 'react';

class CounterOldWay extends React.Component {
    constructor(props) {
        super(props);
        this.state={ count: 0 };
    }

    handleClick() {
        this.setState({count: this.state.count + 1});
    }

    componentDidMount() {
        //This is invoked immediately after a component is
        //mounted.  The reason you might want to add a componentDidMount
        //hook to your class is that it is generally considered
        //very poor form and incorrect to do any large operations like
        //api requests or network load inside the constructor, or the renderer.

        //componentDidMount is a good place to update the component, or manipulate
        //the dome after the component is loaded or mounted...

        //And if you call setState inside componentDidMount it will
        //cause an extra rendering..so you can change the state here if necessary
        //from an API call or whatnot.
        console.log("Component did mount");        
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component did unmount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.handleClick.bind(this)}>
                    Increment
                </button>
            </div>
        )
    }
}

export default CounterOldWay;