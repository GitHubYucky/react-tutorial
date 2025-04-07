import { useLocation } from "react-router-dom";
import {Country} from '../types/Types'


const CountryDetailPage=()=>{
    const location=useLocation();
    const country=location.state as Country;

    if(!country){
        return <div>No Country Data Found</div>
    }

    return(
        <div>
            <h2>{country?.name.common}</h2>
            <img src={country?.flags.png} alt="flg" width={100} />
            <p><strong>Name:</strong>{country?.name.common}</p>
            <p><strong>Capital:</strong>{country?.capital[0]}</p>
            <p><strong>Population:</strong>{country?.population.toLocaleString()}</p>
        </div>
    )
}
export default CountryDetailPage
