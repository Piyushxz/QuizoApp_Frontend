import {Link} from "react-router-dom"
export const Navbar = ( ) =>{

    return (
        <header className="heading d-flex grow-shrink-basis align-center">
        <div className="heading-title-icon d-flex grow-shrink-basis align-center">
            <h1 className="heading-title">
                <Link className="link" to="/">Quizo</Link>
            </h1>
        </div>
        <nav className="navigation">
            <ul className="list-non-bullet">
                <li className="list-item-inline">
                    <Link to="/" className="link cursor">Home</Link>
                </li>
                <li className="list-item-inline">
                    <Link to="/auth/login" className="link cursor">Login</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

