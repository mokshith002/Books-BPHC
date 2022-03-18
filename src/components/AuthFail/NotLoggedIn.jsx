import React from "react";

export default function NotLoggedIn({authFail}){

    return (
        <div>
        <div class="col" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
            <div class="row"><h1>You are not Authorized :( </h1></div>
        </div>
     </div>
    )
}