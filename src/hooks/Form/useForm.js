import { useState } from "react"
import axios from 'axios'

import Swal from 'sweetalert2'


const useForm = () => {
    // const sta
    const [validBoolFName,  setBoolFName]       = useState(false);
    const [validBoolFLName, setBool_FLName]     = useState(false);
    const [validBoolBDate,  setBool_BDate]      = useState(false);
    const [validBoolBEmail, setBool_BEmail]     = useState(false);
    const [validBoolBPhone, setBool_BPhone]     = useState(false);
    const [carreras,        setCarreras]        = useState([]);
    const [datas, setDatas]                     = useState({
        nombre      :   '',
        papellido   :   '',
        sapellido   :   '',
        fnacimiento :   '',
        email       :   '',
        telefono    :   '',
        opt_one     :   '',
        opt_two     :   '',
        opt_scholl  :   '',
    })
    
    // fun_getCarrer
    const fun_getCarrer = () => {
        const lc_carreras = []
        axios.get(`http://localhost/udb/app/cdc/carreras/list`)
        .then(res => {
            const persons = res.data;
            var i = 0
            persons.forEach(person => {
                lc_carreras[i] = {value:person.id,label:person.carrera}
                i++
            });
            setCarreras(lc_carreras)
        })
    }
    // handleValidFName
    const handleValidFName = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setBoolFName(true)
            setDatas({...datas,nombre:valor})
        } else {
            setBoolFName(false)
        }
    }
    // handleValidFLName
    const handleValidFLName = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setBool_FLName(true)
            setDatas({...datas,papellido:valor})
        } else {
            setBool_FLName(false)
        }
    }
    // handelvalidBoolBDate
    const handelvalidBoolBDate = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setDatas({...datas,fnacimiento:valor})
            setBool_BDate(true)
        } else {
            setBool_BDate(false)
        }
    }
    // handleValid_BoolEmail
    const handleValid_BoolEmail = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setDatas({...datas,email:valor})
            setBool_BEmail(true)
        } else {
            setBool_BEmail(false)
        }
    }    
    // handleValid_BoolPhone
    const handleValid_BoolPhone = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setDatas({...datas,telefono:valor})
            setBool_BPhone(true)
        } else {
            setBool_BPhone(false)
        }
    }
    // 
    const _handleChangeOptOne = (event) => {
        setDatas({...datas, opt_one: event.value})
    }
    // 
    const _handleChangeOptTwo = (event) => {
        setDatas({...datas, opt_two: event.value})
    }
    //  onSubmitForm
    const onSubmitForm = (e) => {
        // start
        e.preventDefault();
        if (    validBoolFName  === false       ||
                validBoolFLName === false       ||
                validBoolBDate  === false       ||
                validBoolBEmail === false       ||
                validBoolBPhone === false       ) {
            // ----

            // ----
            Swal.fire({
                title: 'Atención',
                text: 'Campos Vacíos o Incorrectos',
                icon: 'info',
                confirmButtonText: 'Aceptar'
            })
            // ----
        } else {

            axios.post(
                'http://localhost/crm/webservices/revice_info', 
                datas,
                ).then(function (response) {                
                console.log("Datos enviados: "+ (JSON.stringify(response)));                
            },{headers: {"Access-Control-Allow-Origin": "*"}}).catch(function (error) {
                console.log("     ...     "+error);
            });

            Swal.fire({
                title: 'Contacto registrado',
                text: 'Bienvenido al Open house',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
        // end
    }
    // 
    return {validBoolFName, handleValidFName, validBoolFLName, handleValidFLName, handelvalidBoolBDate, validBoolBDate, 
            handleValid_BoolEmail, setBool_BEmail, handleValid_BoolPhone, setBool_BPhone, fun_getCarrer, _handleChangeOptOne, _handleChangeOptTwo, carreras, onSubmitForm}
}

export default useForm