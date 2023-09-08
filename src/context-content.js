import React from 'react'
import { userContext } from './context'

export default function Content(){
    let user = React.useContext(userContext)

    const contenStyle = {
        backgroundColor : '#ddd',
        textAlign : 'center',
        martgin : 10,
        padding : 10
    }
    return(
        <div style={contenStyle}>
            Hello {user}
        </div>
    )
}