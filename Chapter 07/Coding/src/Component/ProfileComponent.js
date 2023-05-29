import React from "react";

    

class ProfileClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count: 90,
            count2: 0
        };
        console.log("constructor");
    }

    render(){
        console.log('render() method')
        return (
            <div style={ {color:"blueviolet"}}>
                <h1>React Class Component</h1>
                <h2>Name : {this.props.Name}</h2>
                <h2>XYZ : {this.props.xyz}</h2>
                <h2>Count: {this.state.count}</h2>
                // Never Mutate State Variables <br />
                <button onClick={ () => {
                    this.setState({
                        count: 1,
                    })
                }} >Set Count</button>
            </div>
        )
    }
}

export default ProfileClass;