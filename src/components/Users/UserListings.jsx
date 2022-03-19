import axios from 'axios';
import React, { useEffect } from 'react';
import Card from '../Books/Cards/card';
import CardHolder from '../Books/Cards/cardholder'
import NotLoggedIn from '../AuthFail/NotLoggedIn';
import AdminOnly from '../AuthFail/AdminOnly';
import { useParams } from 'react-router-dom';

export default function MyListings(){
    const [cards, setCards] = React.useState([]);
    const [userRole, setUserRole] = React.useState('');
    const [userName, setUserName] = React.useState('');

    const URL = `http://localhost:${5000}`;

    const ID = useParams().id;

    const id = localStorage.getItem('userId');


    useEffect(() => {
        axios.get(`${URL}/users/${id}`)
        .then(res => {
            setUserRole(res.data.role);
        })
        .catch(err => console.log(err))

        axios.get(`${URL}/users/${ID}`)
        .then(res => {
            setUserName(res.data.name);
        })
        .catch(err => console.log(err))
    }, [])

    
    
    
    axios.get(`${URL}/listings`)
    .then(res => {
        setCards(() => {
            return res.data
            .filter(listing => listing.sellerId === ID)
            .map(card => (
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
    
    if(userRole != 'Admin' && userRole != 'Moderator'){
        return <AdminOnly />
    }

    if(!localStorage.getItem('userId')){
        return <NotLoggedIn />
    }

    return(
        <div>
            <div class="row text-center" style={{ marginTop: 50, marginBottom:0}}>
                <div className="col-12"><h2 class="">{userName}'s Listings</h2></div>
            </div>
            <div class="text-center" style={{ marginTop: 20}}>
                <a href='/listings/add' type="button" class="btn btn-dark col-1">Add Book</a>
            </div>
            <CardHolder cardData={cards}/>
        </div>
    )
}
