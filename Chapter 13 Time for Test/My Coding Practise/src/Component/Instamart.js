import { useState } from "react";
import { filterItems, foods } from "../utils/data";

const Section = ({title, description, isVisible, setIsVisible, setVisibleSection }) => {

    return(
        <div className=" border-black border-solid border-2 p-2 m-2  "> 
            <h2 className="text-xl font-bold ">
                {title}
            </h2>
            {
                isVisible ?                
                <button 
                onClick={ () => { setVisibleSection("")} }
                className=" text-bold underline cursor-pointer"
                    
                >Hide</button>
                :
                <button 
                onClick={ () => { setIsVisible() }}
                className=" text-bold underline cursor-pointer"                    
                >Show</button>
            }
             {isVisible && <h4 className="text-md ">{description}</h4>}
        </div>

    );
}
const InstamartAcc = () => {  
    const [visibleSection, setVisibleSection] = useState("")    
     return (
         <div>
             <h1 className="text-2xl font-bold ">Instamart</h1>
            <Section title = {"About Instamart"} 
            description = {"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}            
            isVisible={visibleSection === "about" }
            setIsVisible = { () => setVisibleSection("about")}
            setVisibleSection = {setVisibleSection}
            />    
            
            <Section title = {"Team Instamart"} 
            description = {"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}            
            isVisible={visibleSection === "team"}
            setIsVisible = { () => setVisibleSection("team")}
            setVisibleSection = {setVisibleSection}
            />       

            <Section title = {"Careers"} 
            description = {"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}            
            isVisible={visibleSection === "careers"}
            setIsVisible = { () => setVisibleSection("careers")}
            setVisibleSection = {setVisibleSection}
            />                
         </div>
     )
}


const SyncedInput = () => {
    const [text, setText] = useState("")

    function handleChange (e) {
        setText(e.target.value)
    }

    return(
        <>
        <h1 className="text-2xl font-bold p-2 m-2" > Synced Inputs</h1>
            <Input label="Input 1" value = {text} onChange = {handleChange}/>
            <br />
            <Input label="Input 2" value = {text} onChange = {handleChange} />
        </>
    )
}

const Input = ({label, value, onChange}) => {


    return(
        <>
            <label className="text-xl   ">
                {label}
                <input 
                    className="p-2 m-2 w-2/5 text-lg outline-none  shadow-sm border-solid focus:border-dotted  focus:text-red-700  border-2 border-blue-700 rounded   "
                value={value} 
                onChange = {onChange}
                />
            </label>
            
        </>
        
    )
}

const FilterableSearch = () => {

    const [text, setText] = useState("")

    function handleChange(e){
        setText(e.target.value)
    }

    const filteredFood = filterItems(foods, text)

    return(
        <>
        <h1 className="text-2xl font-bold p-2 m-2" > Filterable Search </h1>
            <SearchBar value = {text} onChange = {handleChange} />
            < List items = {filteredFood} />
        </>
    )
}

const SearchBar = ({value , onChange}) => {



    return(
        <>
            <label className="text-xl   ">
                Search: 
                <input 
                    className="p-2 m-2 w-2/5 text-lg outline-none  shadow-sm border-solid focus:border-dotted  focus:text-red-700  border-2 border-blue-700 rounded   "
                value={value} 
                onChange = {onChange}
                />
            </label>
            
        </>
        
    )
}

const List = ({items}) => {
    
    return(
        <>
        <table className="table-auto border border-slate-300 p-2 m-2">
            <tbody>
                {items.map ( food => (
                    <tr key= {food.id}>
                        <td className="table-auto border text-xl p-1 m-1 border-slate-300 ">{food.name}</td>
                        <td className="table-auto border text-xl p-1 m-1 border-slate-300 ">{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

const Instamart = () => {

    return (
        <>
            <InstamartAcc />
            <SyncedInput />
            <FilterableSearch />
        </>
        
    )
}

export default Instamart;