import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const userid = useParams().byebye

    console.log(userid)
    return (
        <div>
            <h1>User {userid}</h1>
        </div>
    )
}

export default User
