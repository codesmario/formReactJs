import useForm from '../../../hooks/Form/useForm'
import Select from 'react-select'
import { SubTitle } from "../../common/SubTitle";
import { useEffect } from 'react';


export const FormView = () => {

        const {validBoolFName, handleValidFName,  validBoolFLName, handleValidFLName, validBoolBDate, handelvalidBoolBDate, 
                handleValid_BoolEmail, setBool_BEmail, handleValid_BoolPhone, setBool_BPhone, fun_getCarrer, carreras,
                 _handleChangeOptOne, _handleChangeOptTwo, onSubmitForm} = useForm(false);

        useEffect(() => {
            fun_getCarrer()
        },[])

        return (
            <div className="row">
                
                <form action="http://localhost/foncae/student/save" onSubmit={onSubmitForm} className="row" autoComplete='off'>
                    <SubTitle title="Datos Generales" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12">
                                <label for="fname" className="form-label">Nombre <span className="text-danger">(*)</span>:</label>
                                <input type="text" className="form-control" id="fname" name="fname" onChange={handleValidFName} />
                            </div>
                            <div className="col-md-12">
                                <label for="flname" className="form-label">Primer Apellido <span className="text-danger">(*)</span>:</label>
                                <input type="text" className="form-control" id="flname" name="flname" onChange={handleValidFLName} />
                            </div>
                            <div className="col-md-12">
                                <label for="slname" className="form-label">Segundo Apellido</label>
                                <input type="text" className="form-control" id="slname" name="slname" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="col-md-12">
                                <label for="date-birthday" className="form-label">Fecha de naciemiento <span className="text-danger">(*)</span>:</label>
                                <input type="text" className="form-control" id="date-birthday" name="date-birthday"  onChange={handelvalidBoolBDate} />
                            </div>
                            <div className="col-md-12">
                                <label for="emailUser" className="form-label">Correo electrónico <span className="text-danger">(*)</span>:</label>
                                <input type="email" className="form-control" id="emailUser"  name="emailUser"  required onChange={handleValid_BoolEmail}/>
                            </div>
                            <div className="col-md-12">
                                <label for="phone" className="form-label">Teléfono <span className="text-danger">(*)</span>:</label>
                                <input type="text" className="form-control" id="phone"  name="phone"  onChange={handleValid_BoolPhone}/>
                            </div>
                        </div>
                    </div>


                    <SubTitle title="Datos de interés" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-12">
                                <label for="optCarreraOne" className="form-label">Carrera 1ra opción</label>
                                <Select className="" id="optCarreraOne" options={carreras} name="opt_one"  onChange={_handleChangeOptOne}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-12">
                                <label for="optCarreraTwo" className="form-label">Carrera 2da opción</label>
                                <Select className="" id="optCarreraTwo" options={carreras} name="opt_two" onChange={_handleChangeOptTwo}/>
                            </div>
                        </div>
                    </div>
                    
                    <SubTitle title="Institución de procedencia" />
                    <div className="row">
                        <div className="col-12">
                            <label for="optSchool" className="form-label">Colegio o escuela de procedencia</label>
                            <Select className="" id="optSchool" options={carreras} />
                        </div>
                    </div>

                    <div className="col-12 g-3">
                        <input type="submit" value="Submit" />
                        
                    </div>
                </form>

            </div>
        );
 
}