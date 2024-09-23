import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { contacts } from "./funciones";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div>
                {contacts.map((card, index) => {
                    return (
                        <div className="card">
                            <div
                                className="card bg-dark text-white"
                                key={index}
                            >
                                <p>{card.FullName}{card.age}</p>

                            </div>
                        </div>
                    )
                })}
            </div>
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
