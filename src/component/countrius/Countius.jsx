import { useEffect, useState } from "react"

const Countius = () => {
    const [Countrie, setCountrie] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountrie(data))


    }, [])
    return (
        <div>
            <h3>Countries Total: {Countrie.length}</h3>

        </div>
    );
};

export default Countius;