import { useEffect, useState } from "react"
import Country from "../country/Country";
import './Countius.css'

const Countius = () => {
    const [Countrie, setCountrie] = useState([])
    const [visitedcountry, setvisitedcountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountrie(data))


    }, [])
    const handelvisitedcountry = COUNTRY => {
        console.log('add to your vesited country ')
        console.log(COUNTRY)
        const newvisitedcountry = [...visitedcountry, COUNTRY];
        setvisitedcountry(newvisitedcountry);

    }
    return (
        <div>
            <h3>visited Country{visitedcountry.length} </h3>
            <div>
                <ul>
                    {
                        visitedcountry.map(VCountry => <li key={VCountry.ccn3} >{VCountry?.name?.common}</li>)
                    }

                </ul>
            </div>
            <h3>Countries Total: {Countrie.length}</h3>
            <div className="Countius_countener ">
                {
                    Countrie.map(country => <Country
                        country={country}
                        handelvisitedcountry={handelvisitedcountry}
                        key={country?.ccn3}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countius;