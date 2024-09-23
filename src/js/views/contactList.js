import React from "react";
import { contacts } from "./funciones";


const ContactList = () => {

    return (

<div>
{contacts.map((card, index) => {
        return (
            <div className="card">
            <card
                className="bg-dark text-white"
                key={index}
            >
                <p>{card.FullName}{card.age}</p>

            </card>
            </div>
        )
    })}
</div>

    )
}