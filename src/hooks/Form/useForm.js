import { useState } from "react"
import Swal from 'sweetalert2'


const useForm = () => {
    const [validBoolFName, setBoolFName]        = useState(false);
    const [validBoolFLName, setBool_FLName]     = useState(false);
    const [validBoolBDate, setBool_BDate]       = useState(false);
    const [validBoolBEmail, setBool_BEmail]     = useState(false);
    const [validBoolBPhone, setBool_BPhone]     = useState(false);
    // handleValidFName
    const handleValidFName = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setBoolFName(true)
        } else {
            setBoolFName(false)
        }
    }
    // handleValidFLName
    const handleValidFLName = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setBool_FLName(true)
        } else {
            setBool_FLName(false)
        }
    }
    // handelvalidBoolBDate
    const handelvalidBoolBDate = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setBool_BDate(true)
        } else {
            setBool_BDate(false)
        }
    }
    // handleValid_BoolEmail
    const handleValid_BoolEmail = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setBool_BEmail(true)
        } else {
            setBool_BEmail(false)
        }
    }    
    // handleValid_BoolPhone
    const handleValid_BoolPhone = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            setBool_BPhone(true)
        } else {
            setBool_BPhone(false)
        }
    }    


    //  onSubmitForm
    const onSubmitForm = (e) => {
        e.preventDefault();
        // start
        if (    validBoolFName  == false     ||
                validBoolFLName == false    ||
                validBoolBDate  == false     ||
                validBoolBEmail == false    ||
                validBoolBPhone ==  false   ) {
            Swal.fire({
                title: 'Atención',
                text: 'Campos Vacios o Incorrectos',
                icon: 'info',
                confirmButtonText: 'Aceptar'
            })
        } else {
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
    return {validBoolFName, handleValidFName, validBoolFLName, handleValidFLName, handelvalidBoolBDate, validBoolBDate, handleValid_BoolEmail, setBool_BEmail, handleValid_BoolPhone, setBool_BPhone, onSubmitForm}
}

export default useForm