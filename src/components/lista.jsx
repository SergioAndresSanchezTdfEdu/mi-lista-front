import React, { useState , useEffect } from 'react';
import "./lista.css";

const Lista = () => {

    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/lista')
        .then((res) => res.json())
        .then((data) => setPersonas(data))
        .catch((error) => {
            console.log('No se pudieron obtener las personas: ',error)
        });
    }, []);

    return(
        <>
            <h1>Lista de Personas</h1>
            <div className="borde">
                <table className="table table-primary table-striped vertical">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Nacionalidad</th>
                        </tr>
                    </thead>
                    <tbody>
                    {personas.map((persona, index) => (
                        <tr key={index}>
                            <td >{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                            <td>{persona.nacionalidad}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Lista;