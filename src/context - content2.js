import React, {createContext} from "react";
import { userContext } from "./context";

export default function content2(){
    let [user,setUser] = React.useContext(userContext)

    const contenStyle = {
        backgroundColor : '#ddd',
        textAlign : 'center',
        martgin : 10,
        padding : 10
    }
    const onClickSigin = (event)=>{
        event.preventDefault()
        setUser('Tom Jerry')
    }
    return (
        <div style={contenStyle}>
            {
                (user)
                ?<span>Hello {user}</span>
                :<span><a href=" "onClick={onClickSigin}>Signin</a></span>
            }
        </div>
    )
}
