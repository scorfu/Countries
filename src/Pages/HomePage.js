import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAndSetCountries } from "../features/countries";
import Card from "../Components/Card";

const HomePage = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const countries = useSelector(state => state.countries.countries);

    useEffect(() => {
        dispatch(fetchAndSetCountries());
    }, [dispatch]);

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        console.log(searchQuery);
        console.log(filteredCountries);
    };

    return <>
        <h1 className="text-center bg-secondary mb-0">All countries of the world</h1>
        <div className="d-flex flex-column align-items-center sticky-top bg-secondary-subtle p-3">
            <input className="d-flex w-25 border border-0"  placeholder="Search country" onChange={handleSearchChange}></input>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
            {filteredCountries.map((country) => <Card country={country} key={country.name.common} />)}
        </div>
    </>
}

export default HomePage;