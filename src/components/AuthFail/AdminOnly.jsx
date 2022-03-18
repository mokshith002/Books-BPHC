import React from "react";

export default function NotLoggedIn({authFail}){

    return (
        <div class="col" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div class="row"><h1>You are not Authorized :(</h1></div>
            <div class="row"><h2>Admin access only</h2></div>
        </div>
    )
}