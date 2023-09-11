
import './Country.css'
const Country = ({ country }) => {
    const { name, flags } = country;
    console.log(country);
    return (
        <div className='Country_style'>
            <img src={flags?.png} alt="" />
            <h1>Name:{name?.common}</h1>
        </div>
    );
};

export default Country;