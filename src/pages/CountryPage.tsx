import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Country } from "../types/Types";



const CountryPage=()=>{
    const [country,setCountry]=useState<Country|null>(null)
    const [countryName,setCountryName]=useState<string>("japan")

    const navigate=useNavigate()

    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setCountryName(e.target.value)
    }

    const handleClick=(country:Country)=>{
        navigate('/country-detail',{state:country})
    }

    const fetchCountry=()=>{
      fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res)=>res.json())
      .then((data)=>{
        setCountry(data[0])
      })
      .catch((err)=>{
        console.log("err",err)
        setCountry(null)
      })
    }

    useEffect(()=>{
        fetchCountry()
    },[])

    return(
        <>
            <div>
                <h1>CountryApp</h1>
                <h2>CountrySearch</h2>
                <input type="text"
                    value={countryName}
                    onChange={handleInputChange}
                    placeholder='Input CountryName'
                    style={{marginRight:'10px'}}
                />
                <button onClick={fetchCountry}>Search</button>
            </div>
            {country ?(
            <div onClick={()=>handleClick(country)} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <img src={country?.flags.png} alt="flg" width={100} />
                <p><strong>Name:</strong>{country?.name.common}</p>
                <p><strong>Capital:</strong>{country?.capital[0]}</p>
                <p><strong>Population:</strong>{country?.population.toLocaleString()}</p>
            </div>
            ):(
                <p>no country found</p>
            )}

        </>

    )
}

export default CountryPage
