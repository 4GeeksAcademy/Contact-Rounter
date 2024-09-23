import React from "react";
import { contacts } from "./funciones";



const ContactForm = () => {


  return (

    <div className="container">

      <form>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <input type="text" id="form6Example1" className="form-control" />
              <label className="form-label" >Full Name</label>
            </div>
          </div>

        </div>


        <div data-mdb-input-init className="form-outline mb-4">
          <input type="text" id="form6Example3" className="form-control" />
          <label className="form-label" >Adress</label>
        </div>


        <div data-mdb-input-init className="form-outline mb-4">
          <input type="text" id="form6Example4" className="form-control" />
          <label className="form-label" >Phone Number</label>
        </div>


        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" id="form6Example5" className="form-control" />
          <label className="form-label" >Email</label>
        </div>



        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form6Example8"

          />
          <label className="form-check-label" > Create an account? </label>
        </div>


        <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Place order</button>

      </form>

    </div>

  )
}

export { ContactForm }