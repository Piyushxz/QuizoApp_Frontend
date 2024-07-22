import "./Auth.css"
import { useAuth } from "../../context/auth-context"
export const AuthLogin = () =>{
    const {username,password,authDispatch} = useAuth()

    const handleUsername = (e) =>{
        authDispatch({
            type:"username",
            payload:e.target.value
        })
    }
    const handlePassword = (e) =>{
        authDispatch({
            type:"password",
            payload:e.target.value
        })
    }
    console.log({username,password})
    return(
        <div className="d-grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>
                <form>
                <div className="form-container">
                    <label className="form-label">Username</label>
                    <input className="form-input lh-ls"placeholder="username" onChange={handleUsername}/>

                </div>
                <div className="form-container">
                <label className="form-label">Password</label>
                <input className="form-input lh-ls" placeholder="" onChange={handlePassword}/>
                </div>
                <div className="cta">
                    <button className="button login-btn btn-margin cursor sign-up-btn">Submit</button>
                </div>
                </form>

            </div>
        </div>
    )
}