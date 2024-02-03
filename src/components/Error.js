import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();

    return (
        <div className="error-container">
            <h2 className="error-heading">Oops!</h2>
            <h4>Something Went Wrong!</h4>
        </div>
    )
}

export default Error;