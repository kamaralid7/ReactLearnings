import { useEffect } from "react";


const Profile = () =>{

    useEffect( ()=> {
        
        const timer = setInterval( () => {
            console.log('NAMASTE REACT OP2')
        } , 1000)
        
        return() =>{
            console.log('useEffect Unmount')
            clearInterval(timer);
        }
    }, [])
    return(
        <>
            <div className="profilePage" style={ {color: "red"}}>
                <h2>This is a profile page</h2>
            </div>
        </>
    )
}

export default Profile;