import axios from 'axios';
import React from 'react';
import Card from '../Cards/card';
import CardHolder from '../Cards/cardholder'

export default function AllListings(props){
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
                        userRole = {props.userRole}
                    />
                </div>
            ))
        })
    });

    return(
        <div>
            <div class="row text-center" style={{ marginTop: 50, marginBottom:0}}>
                <div className="col-12"><h2 class="">All Listings</h2></div>
            </div>
            <div class="text-center" style={{ marginTop: 20}}>
                <a href='/listings/add' type="button" class="btn btn-dark col-1">Add Book</a>
            </div>
            
            <CardHolder cardData={cards}/>
        </div>
    )
}
