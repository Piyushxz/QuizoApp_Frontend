
import { useContext,createContext ,useReducer} from "react";
import { authReducer } from "../components/reducer/auth-reducer";
const initialState = {
    username :"",
    password :""
}

const AuthContext = createContext(initialState)



const AuthProvier = ({children})=>{

    const [{username,password},authDispatch] = useReducer(authReducer,initialState)
    return(
        <AuthContext.Provider value={{username,password,authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {AuthProvier,useAuth}