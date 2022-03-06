import React, { Component } from 'react';
export default function Test(params) {
    const buttonFancy = () =>{
        if(localStorage.getItem('test') != undefined){
            return (
                <button onClick={()=>{
                    localStorage.removeItem('test');
                    window.location.reload();
                }}>
                    REMOVE ITEM
                </button>
            );
        }else{
            return (
                <button onClick={()=>{
                    localStorage.setItem('test',1);
                    window.location.reload();
                }}>
                    ADD ITEM
                </button>
            );
        }
    }
    return (
        <div>
            {buttonFancy()}
        </div>
    )
};
