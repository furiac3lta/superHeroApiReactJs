import { useState, useEffect } from 'react';
import Axios from 'axios'
import HeroItemList from './../components/HeroItemList';
import Hero from './../components/Hero'

function Home() {
    const [ busqueda, setBusqueda ] = useState("");
    const [ results, setResults ] = useState([]);
    const [data, setData] = useState([]);

    //consultar api
    useEffect(()=>{
      const consultarAPI = async() =>{
       
      
        try{
          const url = `https://akabab.github.io/superhero-api/api/all.json`
          const resultado = await Axios.get(url);
          setData(resultado.data)
          console.log(results, 'DESDE LA HOME')
        }catch(error){
          console.log(error)
        }
      }
    consultarAPI()
    },[results])

    
    return (
        <div>
            <Hero data = {data} busqueda={busqueda} setBusqueda={setBusqueda} results={results} setResults={setResults}/>
            <HeroItemList data = {data}/>
        </div>
    )
}

export default Home
