import React, { Component } from 'react';
import Card from './card';
import axios from 'axios';

export default function CardHolder(props) {
    const {title,cardData} = props;

    // const cardComponents = cardarr.map(card => (
    //     <div className="col-3" key={card._id}>
    //         <Card title={}/>
    //     </div>
    // ));
    return (
        <div className="container p-5">
            <div class="row text-center">
                {(()=>(cardData.length>0 && <div className="col-12"><h2 class="">{title}</h2></div>))()}
            </div>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                {cardData}
            </div>
        </div>
    );
};
