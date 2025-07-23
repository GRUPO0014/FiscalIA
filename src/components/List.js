import React from 'react';

function ObjetivosForm(props){
    const [formData, setFormData] = React.useState({objetivo: "", cuando:""});


    function changeObjetivo(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function submitHandler(e){
        e.preventDefault();
        props.onAdd(formData);
        setFormData({objetivo: "", cuando:""});
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                name="objetivo" 
                value={formData.objetivo} 
                onChange={changeObjetivo} 
                placeholder="Objetivo"
            />
            <input 
                type="text" 
                name="cuando" 
                value={formData.cuando} 
                onChange={changeObjetivo} 
                placeholder="Cuando"
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

function ObjetivosList(props){
    return (
        <ul>
            {props.objetivos.map((objetivo, index) => (
                <li key={index}>
                    {objetivo.objetivo} - {objetivo.cuando}
                </li>
            ))}
        </ul>
    );
}


export function ObjetivosPage(){
    const [ objetivos, setObjetivos ] = React.useState([]);

    function addObjetivo(objetivo){
        setObjetivos([...objetivos, objetivo]);
    }

    return (
        <div>
            <h1>Mis Objetivos</h1>
            <ObjetivosForm onAdd={addObjetivo} />
            <ObjetivosList objetivos={objetivos} />
        </div>
    );
}