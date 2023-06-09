import React from "react";

    

class ProfileClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count: 90,
            count2: 0,
        };
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "",
                company: "",
            }
        };
        console.log("constructor");
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/kamaralid7");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json)
    }

    render(){
        
        const { count } = this.state;
        console.log('render() method')
        console.log(this.state)
        return (
            <div style={ {color:"blueviolet"}}>
                <h1>React Class Component</h1>
                <h2>Name : {this.state.userInfo.name}</h2>
                <h2>Location : {this.state.userInfo.location}</h2>
                <h2>Count: {count}</h2>
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