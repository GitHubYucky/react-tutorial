import { useEffect, useState } from "react";
import { Country } from "../types/Types"


const CountriesPage=()=>{
    const [countries, setCountries] = useState<Country[]>([]);

    const fetchCountry=()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then((res)=>res.json())
        .then((data)=>{
          setCountries(data)
        })
        .catch((err)=>{
          console.log("err",err)
          setCountries([])
        })
      }

      useEffect(()=>{
        fetchCountry()
      },[])

    return(
        <>
            <h1>CountriesList</h1>
            <ul>
                {countries.map((country,index)=>(
                    <li key={index}>{country.name.common} - {country.capital}</li>
                ))
            }
            </ul>
        </>
    )
}

export default CountriesPage
