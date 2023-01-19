// Descripción
// Esta aplicación tiene los siguientes usos:
// .- Llenar una arreglo de tareas por realizar (items) usando una entrada (input) de usuario
// .- Luego permite hacer un checked a un objeto del tipo checkbox cuando la tarea ha sido realizada.
// .- Permite eliminar un items de esta lista solo sí no esta marcada como terminada
import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListaQueHaceres() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTasty, setIsTasty] = useState([]);  
  
// Función encargada de agregar alementos a los arrelos items y isTasty, además de limpiar la variable de entrada
  function handleSubmit(event) {
    event.preventDefault();
    setItems([...items, inputValue]);
    setInputValue('');
    setIsTasty([...isTasty, false]);
  }

// Función permite eliminar la tarea
  function handleClick(index) {
    if(!isTasty[index]){
      setItems(items.filter((item, i) => i !== index));
      setIsTasty(isTasty.filter((item, i) => i !== index));
    }
  }
  function handleCheck(index) {
    if(isTasty[index])
    {
      isTasty[index] = false
    }else{
      isTasty[index] = true
    }
    setIsTasty([...isTasty]);
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <br/>
      <ListGroup as="ul">
        {items.map((item, index) => (
          <ListGroup.Item as="li" key={index}> {item} 
              <label><input type="checkbox" checked={isTasty[index]} onChange={() => handleCheck(index)}/>Task done?</label>
              <button onClick={() => handleClick(index)}>Delete Task</button></ListGroup.Item>
        ))}
      </ListGroup>    
    </div> 
  );
}

export default ListaQueHaceres;
