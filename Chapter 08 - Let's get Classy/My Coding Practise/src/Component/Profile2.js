import { useEffect } from "react";


const Profile2 = () =>{

    useEffect( ()=> {
        
        const timer = setInterval( () => {
            console.log('NAMASTE REACT OP3')
        } , 1000)
        
        return() =>{
            console.log('useEffect Unmount2')
            clearInterval(timer);
        }
    }, [])
    return(
        <>
            <div className="profilePage" style={ {color: "red"}}>
                <h2>This is a profile page</h2>
            </div>
            {console.log ('render complete for Profile2')}
        </>
    )
}

export default Profile2;