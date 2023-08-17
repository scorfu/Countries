import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCountry } from "../features/countries";


const Card = ({ country }) => {
    const dispatch = useDispatch();
    const setCountryInfo = () => {
        dispatch(setCountry(country))
    };


    const formatArray = (array) => {
        return array ? array.slice(0, -1).join(', ') + (array.length > 1 ? ' and ' : '') + array.slice(-1) : 'No avaialable data';
    }
    return (
        <div className="container text-center col d-flex justify-content-center" >
            <div className="card border-3 m-2 p-2" style={{ width: '20rem', height: '35rem' }}>
                <img src={country.flags.png} className="card-img-top border" style={{ width: '100%', height: '15rem' }} alt="..." />
                <div className="card-body">

                </div>
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Capital: {formatArray(country.capital)}</p>
                <a href={country.maps.googleMaps} className="btn btn-primary">On Maps</a>
                <div onClick={setCountryInfo}>
                    <Link className="btn btn-danger mt-2" to={{ pathname: `/country` }}>More Info</Link>
                </div>
            </div>
        </div>
    )

}

export default Card;