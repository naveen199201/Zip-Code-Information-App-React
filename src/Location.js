import { useState, useEffect } from "react";
import axios from "axios";
const Location = (props) => {
    const value = props.searchKey;
    console.log('value', value);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleClick = () => {
        setData("")
      }
    useEffect(() => { 
        if (value.length > 0) {
            setError(null);
            setData(null);
            setLoading(true);
            axios.get(`https://api.zippopotam.us/in/${value}`)
                .then((response) => {
                    setData(response.data);
                    console.log(response.data)
                    setLoading(false);
                })
                .catch((error) => {
                    setData(null);
                    console.error('Error fetching data:', error);
                    setError(error);
                    setLoading(false);
                });
        } else {
            setLoading(true);
            setData(null);
            setLoading(false);


        }
    }, [value]);
    return (
        <div> 
            <div className="loading fw-bold fs-1">
            {loading && <p>Loading...</p>}
            </div>
            <div className="error bg-danger text-white fw-bold rounded rounded-4">
            {error && <p>Error: {error.message}</p>}
            </div>
            
            {data && (
                <div>
                    <h2 className="bg-success fw-bold text-white fs-2">Location Information</h2>
                    <pre className="fs-4">{JSON.stringify(data, null, 2)}</pre>  
                </div>
            )}
            {data!=null &&            
            <button  className="clear bg-info  fw-bold rounded rounded-3" onClick={handleClick}>Clear</button>        
            }
        </div>
    )
}
export default Location