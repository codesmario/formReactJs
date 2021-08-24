import { useState } from "react"
import Swal from 'sweetalert2'


const useForm = () => {
    const [validLengthEmail, setvalidLenthEmail]    = useState(false);
    const [validCity, setValidCity]                 = useState(false);
    // validLength
    const validLength = (val) => {
        let valor = val.target.value
        if (valor.length >= 4) {
            console.log();
            setvalidLenthEmail(true)
        } else {
            setvalidLenthEmail(false)
        }
    }
    // validCity
    const handle_validCity = (val) => {
        let valor = val.target.value
        if (valor.length >= 5) {
            setValidCity(true)
        } else {
            setValidCity(false)
        }
    }
    //  onSubmitForm
    const onSubmitForm = (e) => {
        e.preventDefault();

        if (validCity == false || validLengthEmail == false) {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        } else {
            Swal.fire({
                title: 'Contacto registrado',
                text: 'Bienvenido al Open house',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }
    // 
    return {validLengthEmail, validLength, validCity, handle_validCity, onSubmitForm}
}

export default useForm