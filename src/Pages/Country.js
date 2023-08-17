import { useSelector } from "react-redux";
import SingleCountry from "../Components/SingleCountry";


const Country = () => {
    const country = useSelector(state => state.countries.country);
    const countries = useSelector(state => state.countries.countries)

    console.log(country);
    console.log(countries);
    return <div className="bg-secondary">
    <h1 className=" text-center">More info about {country.name.common} {country.flag}</h1>
    <SingleCountry country={country}/>
    </div>
}

export default Country