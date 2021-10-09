
import React from 'react'
import Search from './Search'
import "./../styles/Hero.css"
export default function Hero({data, busqueda, setBusqueda, results, setResults}) {

    
    return (
        <div className="Hero" id="Hero__filter">
            <div className="Container">
                <div className="Hero__search-container">
                    <Search data ={data} busqueda={busqueda} setBusqueda={setBusqueda} results={results} setResults={setResults}/>
                </div>
            </div>
        </div>
    )
}
