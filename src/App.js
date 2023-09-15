import React from 'react'
import { userContext } from './context'
import header2 from './context-header2'
import content2 from './context-content2'
export default function App() {
    let [user,setUser] = React.useState('')
    return (
        <userContext.Provider value={[user, setUser]}>
        <header/>
        <content/>
        </userContext.Provider>
    )
}