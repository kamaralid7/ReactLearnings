import ErrorImage from "../Images/404 Error.jpg"
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError([]);
    console.log(err)
    return(
        <>
            <div className="error-page">
                <img src={ErrorImage} alt="Error Image" />
                <h1>Oopss!!!</h1>
                <p>Something went wrong!</p>
                <h3 className="error-data">{err.error.stack}</h3>
                <h3 className="error-back-home">
                    <Link to="/">Back Home</Link>
                </h3>
            </div>
        </>
    )
}

export default Error;