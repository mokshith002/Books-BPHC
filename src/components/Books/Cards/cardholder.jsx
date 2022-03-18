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
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                {cardData}
            </div>
        </div>
    );
};
