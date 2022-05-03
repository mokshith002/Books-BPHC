import React from 'react';
import axios from 'axios';
import AccordionHolder from './Accordions/AccordionHolder';
import Accordion from './Accordions/Accordion';

export default function AllUsers(props){
    
    const [accordions, setAccordions] = React.useState([]);
    const [flagged, setFlagged] = React.useState(false);

    const URL = `http://localhost:${5000}`;


    React.useEffect(() => {
        axios.get(`${URL}/users`)
            .then(res => {
            setAccordions(() => {
                return res.data.filter(user => user.role !== 'Admin' && (flagged ? user.flagged : true))
                .map(user => (
                    <Accordion 
                        user={user}
                        id={user._id}
                        key={user._id}
                        userRole = {props.userRole}
                    />
                ))
            })
        })
    })

    const handleFlaggedToggle = () => {
        setFlagged(prevFlag => !prevFlag);
    }
    

    return(
        <div>
            <div class="row text-center" style={{ marginTop: 50, marginBottom:0}}>
                    <div className="col-12"><h2 class="">Users</h2></div>
            </div>
            <div class="text-center" style={{ marginTop: 20}}>
                <a type="button" class="btn btn-dark col-1" onClick={handleFlaggedToggle}>{flagged ? "All" : "Flagged"} Users</a>
            </div>
            <AccordionHolder accordionData={accordions}/>
        </div>
    )

}