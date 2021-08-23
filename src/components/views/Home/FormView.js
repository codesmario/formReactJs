import { Component, useState } from "react";
import useForm from '../../../hooks/Form/useForm'

export const FormView = () => {
    
        const {validLengthEmail, validLength, validCity, handle_validCity, onSubmitForm} = useForm(false);
    
        return (

            <form className="row g-3" autoComplete='off'>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" onChange={validLength} />
                    {(validLengthEmail? <span>campo aceptado</span>:<span>Campo no aceptado</span> )}
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" onChange={handle_validCity} />
                    {(validCity? <span>campo aceptado</span>:<span>Campo no aceptado</span> )}
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div className="col-12">
                    <button  className="btn btn-primary" onClick={onSubmitForm}>Sign in</button>
                </div>
            </form>
        );
 
}