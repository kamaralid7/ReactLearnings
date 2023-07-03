import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible }) => {

    return(
        <div className=" border-black border-solid border-2 p-2 m-2  "> 
            <h2 className="text-xl font-bold ">
                {title}
            </h2>
            {
                isVisible ?                
                <button 
                onClick={ () => { setIsVisible(false) }}
                className=" text-bold underline cursor-pointer"
                    
                >Hide</button>
                :
                <button 
                onClick={ () => { setIsVisible(true) }}
                className=" text-bold underline cursor-pointer"                    
                >Show</button>
            }
             {isVisible && <h4 className="text-md ">{description}</h4>}
        </div>

    );
}
const Instamart = () => {  
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showCareer: true
    })    
     return (
         <div>
             <h1 className="text-2xl font-bold ">Instamart</h1>
            <Section title = {"About Instamart"} 
            description = {"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}            
            isVisible={sectionConfig.showAbout}
            setIsVisible = { () => setSectionConfig({
                showAbout: true,
                showTeam: false,
                showCareer: false
            })}
            />    
            
            <Section title = {"Team Instamart"} 
            description = {"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}            
            isVisible={sectionConfig.showTeam}
            setIsVisible = { () => setSectionConfig({
                showAbout: false,
                showTeam: true,
                showCareer: false
            })}
            />       

            <Section title = {"Careers"} 
            description = {"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}            
            isVisible={sectionConfig.showCareer}
            setIsVisible = { () => setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: true
            })}
            />                
         </div>
     )
}

export default Instamart;