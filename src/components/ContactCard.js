import React from 'react'

function ContactCard(props){
    
    return (
        <div>
            <img src={props.contact.imgSrc}></img>    
            <p>Name: {props.contact.name}</p>  
            <p>Email: {props.contact.email}</p>  
        </div>
    )
}

export default ContactCard