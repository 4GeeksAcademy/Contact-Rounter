import React from "react";

const contacts = [{
    FullName: "Alejandro Ruggeri",
    age: 33,
    email: "alejandro.ruggeri.l@gmail.com",
    phone: "664149400"
},
{
    FullName: "Eva Ninoska",
    age: 35,
    email: "evasupelano@gmail.com",
    phone: "617164119" 
}]

const MapList = () => {

    contacts.map((card, index) => {
        return (
            <div className="container">
            <card
                className="bg-dark text-white"
                key={index}
            >
                <p>{card}</p>

            </card>
            </div>
        )
    })

}

export {MapList, contacts}