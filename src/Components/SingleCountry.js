const SingleCountry = ({ country }) => {
    const officicialNameInCountry = [];
    const officicialPronunciation = [];
    const commonPronunciation = [];
    for (const [key, value] of Object.entries(country.translations)) {
        officicialNameInCountry.push(key);
        officicialPronunciation.push(value.official);
        commonPronunciation.push(value.common);
    }

    const formatArray = (array, type) => {
        switch (type) {
            case 'capital': return array ? array.slice(0, -1).join(', ') + (array.length > 1 ? ' and ' : '') + array.slice(-1) : 'No avaialable data for capital';
                break;
            case 'borders': return array ? array.slice(0, -1).join(', ') + (array.length > 1 ? ' and ' : '') + array.slice(-1) : 'No borders/ insular country';
                break;
            default: return array ? array.slice(0, -1).join(', ') + (array.length > 1 ? ' and ' : '') + array.slice(-1) : 'No avaialable data!';
        };
    };

    return <>
        <div className="bg-secondary-subtle my-2 px-5 py-2">
            <div className="fw-semibold">{country.name.common}, also known as '{Object.values(country.name.nativeName)[0].common}' by its inhabitants, is a country found in {country.region} with a population of {new Intl.NumberFormat('en-IN').format(country.population)} people. Driving is done on the {country.car.side}.</div>
            <hr></hr>
            <div><strong>Location:</strong> {formatArray(country.continents)} in the subregion {country.subregion}</div>
            <p>This country <strong>{country.independent ? 'is an independent one' : 'is not independent'}</strong> and <strong>{country.unMember ? "is part of UN 🇺🇳" : "is not (⛔️) an UN member"}</strong>. </p>
            <p><strong>Capital at:</strong> {formatArray(country.capital, 'capital')}.</p>
            <p><strong>Borders with:</strong> {formatArray(country.borders, 'borders')}.</p>
            <p><strong>Commonly found under the name:</strong> {formatArray(country.altSpellings)}.</p>
            <p><strong>Official languages are:</strong> {formatArray(Object.values(country.languages))}.</p>
            <p><strong>Start of the week is on</strong> {country.startOfWeek} and has {formatArray(country.timezones)} for timezone.</p>
            <p>If you want to call a {country.demonyms.eng.m} (for male) their 📞 format is {country.idd.root}{formatArray(country.idd.suffixes)}</p>
            <p>Currency: {formatArray(Object.values(country.currencies).map(cur => cur.name))} 💵 </p>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Country</th>
                            <th scope="col">Pronounced officially as:</th>
                            <th scope="col">Popular pronounced as:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {officicialNameInCountry.map((country, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{country.toUpperCase()}</td>
                                <td>{officicialPronunciation[index]}</td>
                                <td>{commonPronunciation[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default SingleCountry