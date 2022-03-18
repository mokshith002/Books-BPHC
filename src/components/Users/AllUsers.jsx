import React from 'react';
import axios from 'axios';
import AccordionHolder from './Accordions/AccordionHolder';
import Accordion from './Accordions/Accordion';

export default function AllUsers(){
    
    const [accordions, setAccordions] = React.useState([]);

    const URL = `http://localhost:${5000}`;

    axios.get(`${URL}/users`)
    .then(res => {
        setAccordions(() => {
            return res.data.map(user => (
                
                <Accordion 
                    user={user}
                    id={user._id}
                    key={user._id}
                />
            ))
        })
    })

    return(
        <div>
            <div class="row text-center" style={{ marginTop: 50, marginBottom:0}}>
                    <div className="col-12"><h2 class="">Users</h2></div>
            </div>
            <AccordionHolder accordionData={accordions}/>
        </div>
    )

}