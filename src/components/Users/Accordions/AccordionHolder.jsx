import React from 'react';

export default function AccordionHolder(props){

    const {accordionData} = props;

    return (
        
        <div className="container py-4">
            {accordionData}
        </div>
        
      ) 
}