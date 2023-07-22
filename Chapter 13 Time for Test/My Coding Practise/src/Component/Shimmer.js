const ShimmerUI = () => {
    return(
        <>
            <div data-testid="shimmer-UI" className=" flex flex-wrap">
                {
                    Array(10).fill("")
                    .map( (e,index) => (
                        <div  
                        key={ index }
                        
                        className="shimmer-UI bg-pink-100 border-solid border-2
                        w-56 h-64 p-2 m-5 rounded-md cursor-pointer shadow-lg
                        ">
                           <div className=" bg-white w-48  rounded-md h-28   p-1 m-1">

                            </div> 
                            <div
                               className="h-6 bg-slate-200 p-2 m-2
                               animate-pulse  
                               "
                              ></div>
                            <div
                               className="h-3 bg-slate-200 p-2 m-2
                               animate-pulse
                               "
                              ></div>  
                            <div
                               className="h-1 bg-slate-200 p-1 m-2
                               animate-pulse
                               "
                              ></div>  

                            <div
                               className="h-1 bg-slate-200 p-1 m-2
                               animate-pulse
                               "
                              ></div>      
                            <div
                               className="h-1 bg-slate-200 p-1 m-2
                               animate-pulse
                               "
                              ></div>        
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ShimmerUI;