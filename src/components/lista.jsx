import React, { useState , useEffect } from 'react';

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
            <ul>
                {personas.map((persona, index) => (
                    <li key={index}>{persona.nombre}</li>
                ))}
            </ul>
        </>
    )
}

export default Lista;