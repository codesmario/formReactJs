import { Component, useState } from "react";
import useForm from '../../../hooks/Form/useForm'
import Select from 'react-select'
import { SubTitle } from "../../common/SubTitle";



export const FormView = () => {
    
        const {validBoolFName, handleValidFName,  validBoolFLName, handleValidFLName, validBoolBDate, handelvalidBoolBDate, handleValid_BoolEmail, setBool_BEmail, handleValid_BoolPhone, setBool_BPhone, onSubmitForm} = useForm(false);
        const options = [
            {value:'1', label:'One'},
            {value:'2', label:'Two'},
        ]
        return (

            <div className="row">
                
                <form className="row" autoComplete='off'>
                    <SubTitle title="Datos Generales" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12">
                                <label for="fname" className="form-label">Nombre <span className="text-danger">(*)</span>:</label>
                                <input type="text" className="form-control" id="fname" onChange={handleValidFName} />
                            </div>
                            <div className="col-md-12">
                                <label for="flname" className="form-label">Primer Apellido <span className="text-danger">(*)</span>:</label>
                                <input type="text" className="form-control" id="flname" onChange={handleValidFLName} />
                            </div>
                            <div className="col-md-12">
                                <label for="slname" className="form-label">Segundo Apellido</label>
                                <input type="text" className="form-control" id="slname" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="col-md-12">
                                <label for="date-birthday" className="form-label">Fecha de naciemiento <span className="text-danger">(*)</span>:</label>
                                <input type="text" className="form-control" id="date-birthday" onChange={handelvalidBoolBDate} />
                            </div>
                            <div className="col-md-12">
                                <label for="emailUser" className="form-label">Correo electrónico <span className="text-danger">(*)</span>:</label>
                                <input type="email" className="form-control" id="emailUser" required onChange={handleValid_BoolEmail}/>
                            </div>
                            <div className="col-md-12">
                                <label for="phone" className="form-label">Teléfono <span className="text-danger">(*)</span>:</label>
                                <input type="text" className="form-control" id="phone" onChange={handleValid_BoolPhone}/>
                            </div>
                        </div>
                    </div>


                    <SubTitle title="Datos de interés" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-12">
                                <label for="optCarreraOne" className="form-label">Carrera 1ra opción</label>
                                <Select className="" id="optCarreraOne" options={options} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-12">
                                <label for="optCarreraTwo" className="form-label">Carrera 2da opción</label>
                                <Select className="" id="optCarreraTwo" options={options} />
                            </div>
                        </div>
                    </div>
                    
                    <SubTitle title="Institución de procedencia" />
                    <div className="row">
                        <div className="col-12">
                            <label for="optSchool" className="form-label">Colegio o escuela de procedencia</label>
                            <Select className="" id="optSchool" options={options} />
                        </div>
                    </div>

                    <div className="col-12 g-3">
                        <button  className="btn btn-primary" onClick={onSubmitForm}>Registrar</button>
                    </div>
                </form>

            </div>
        );
 
}