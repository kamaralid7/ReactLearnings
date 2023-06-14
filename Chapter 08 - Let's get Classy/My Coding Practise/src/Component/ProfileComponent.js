import React from "react";

    

class ProfileClass extends React.Component{

    constructor(props){
        super(props);
        console.log('Child - Constructor');
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
    }

    async componentDidMount(){
        console.log("Child - componentDidMount");

        this.timer =  setInterval( () => {
            console.log('NAMASTE REACT OP')
        } , 1000 )



        const data = await fetch("https://api.github.com/users/kamaralid7");
        const json = await data.json();
        this.setState({
            userInfo: json
        })

        console.log(json)
        
        
        console.log("Child - componentDidMount completed");
    }


    componentDidUpdate(){
        console.log('Child - componentDidUpdate')
        clearInterval(this.timer);
    }

    componentWillUnmount(){
        console.log('Child - componentWillUnmount')
        clearInterval(this.timer);
    }

    render(){
        console.log("Child - Render");
        const { count } = this.state;
        return (
            <div style={ {color:"#C70039"}}>
                <h1>React Class Component</h1>
                <h2>Name : {this.state.userInfo.name}</h2>
                <h2>Location : {this.state.userInfo.location}</h2>
                <img src={this.state.userInfo.avatar_url}></img>
            </div>
        )
    }
}

export default ProfileClass;