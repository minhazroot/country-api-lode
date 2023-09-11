
import { useState } from 'react';
import './Country.css'
const Country = ({ country, handelvisitedcountry }) => {
    const { name, flags, capital, population, area, ccn3 } = country;
    // console.log(country);
    //visited button conditioner  function 
    const [visited, srtvisited] = useState(false)
    const handelVisited = () => {
        srtvisited(!visited)
    }

    return (
        //add visited conditioner style
        <div className={`Country_style ${visited && 'visited'}`}>
            <img className='img_style' src={flags?.png} alt="" />
            <h1>Name: {name?.common}</h1>
            <h2>population :{population}</h2>
            <h3>capital: {capital}</h3>
            <h4>Area: {area}</h4>
            <h5>Code: {ccn3}</h5>
            <button onClick={() => handelvisitedcountry(country)}>Mark visited</button>
            <br />
            <div>
                {/* visited button conditioner  chang  */}
                <button onClick={handelVisited}>{visited ? 'visited' : 'Going'}</button>
                {visited ? 'i have visited This Country' : 'i wont to visited'}
                {/* visited button conditioner chang  */}
            </div>
        </div>
    );
};

export default Country;