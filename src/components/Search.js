import React, { useState } from "react";
import "./../styles/Search.css";
import {useHistory} from 'react-router-dom'
import Error from "./Error";
function Search({data, busqueda, setBusqueda, results, setResults}) {    
    const [error, setError] = useState(false);

    const history = useHistory();

    // Manejador de eventos
    const handleChange = e => {
        // Capturo el valor del input
        setBusqueda(e.target.value); 
        
    }
    
    
    const filtrar = () => {
      setError(false)
        for (let index = 0; index < data.length; index++) {
            const element = data[index].name;
            
            if(busqueda.toLowerCase() === element.toLowerCase()){
                results = data[index]
                setBusqueda('');
                history.push(`/HeroFind/${results.id}/${results.name}`)
                setResults(data[index])
            }else{
              setError(true);
            }
        }
    }

  return (
    <div className="Search">
      {error && (<Error mensaje = "Personaje no econtrado"/>)}
      <div className="Search__form">
        <input
          type="text"
          className="Search__input"
          placeholder="Busca tu personaje..."
          name="hero"
          value={busqueda}
          onChange = {handleChange}
        />

        <button type="submit" className="Search__button" onClick={filtrar}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Search;
