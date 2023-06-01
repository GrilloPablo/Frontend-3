import {useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        vehiculo: ''
    })
    
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleInputChange = (event) => {
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
            if((datos.nombre.trim().length > 3) && (datos.vehiculo.length > 6))  {
                setShow(true)
                setError(false)
            } else {
                setError(true)
            }
        console.log('Nombre ' + datos.nombre + ' y vehiculo ' + datos.vehiculo)
    }

    return (
        <>
            <form onSubmit={enviarDatos}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" disabled={show} placeholder="Nombre" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div>
                    <label>Vehiculo Favorito: </label>
                    <input type="text" disabled={show} placeholder="Vehiculo" onChange={handleInputChange} name="vehiculo"></input>
                </div>
                <button type='submit'>Enviar</button>
                {error && 'Por favor chequea que la información sea correcta'}
            </form>

            {show ? 
                <>
                <ul>
                    <h3>Hola {datos.nombre} ! Bienvenido a la carrera !</h3>
                    <h3>Tu vehiculo favorito es: {datos.vehiculo}!</h3>
                </ul>
                </>
                :
                null
            }
        </>
    );
}

export default Formulario;