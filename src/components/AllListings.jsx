import axios from 'axios';
import React from 'react';
import Card from './card';
import CardHolder from './cardholder'

export default function AllListings(){
    const [cards, setCards] = React.useState([]);

    const URL = `http://localhost:${5000}`;

    axios.get(`${URL}/listings`)
    .then(res => {
        setCards(() => {
            return res.data.map(card => (
                <div className="col p-3 d-flex align-items-stretch" key={card._id}>
                    <Card 
                        title={card.title}
                        author={card.author}
                        branches={card.branches}
                        courses={card.courses}
                        price={card.price}
                        listingId={card._id}
                        sellerId={card.sellerId}
                    />
                </div>
            ))
        })
    });

    return(
        <div>
            <CardHolder title="All Listings" cardData={cards}/>
        </div>
    )
}
