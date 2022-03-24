import React from 'react';
import axios from 'axios';
import AccordionHolder from './Accordions/AccordionHolder';
import Accordion from './Accordions/Accordion';
import AdminOnly from '../AuthFail/AdminOnly';

export default function AllUsers(){
    
    const [accordions, setAccordions] = React.useState([]);
    const [userRole, setUserRole] = React.useState('');

    const URL = `http://localhost:${5000}`;

    const id = localStorage.getItem('userId');

    axios.get(`${URL}/users/${id}`)
        .then(res => {
            setUserRole(res.data.role);
        })
        .catch(err => console.log(err))

    axios.get(`${URL}/users`)
    .then(res => {
        setAccordions(() => {
            return res.data.filter(user => user.role !== 'Admin')
            .map(user => (
                <Accordion 
                    user={user}
                    id={user._id}
                    key={user._id}
                />
            ))
        })
    })

    if(userRole != 'Admin' && userRole != 'Moderator'){
        return <AdminOnly/>
    }


    return(
        <div>
            <div class="row text-center" style={{ marginTop: 50, marginBottom:0}}>
                    <div className="col-12"><h2 class="">Users</h2></div>
            </div>
            <AccordionHolder accordionData={accordions}/>
        </div>
    )

}