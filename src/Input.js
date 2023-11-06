import React, { useState } from "react";
import Location from "./Location";

const Input = () => {
    const [value, setValue] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = async () => {
        setSearchKey(value);
    };
    return (
        <div className="container bg-light text-center">
            <div className="fw-bold py-5 mx-5  ">
                <span className="fs-2">Enter Pincode:   </span>
                <input className="fs-3 rounded-end rounded-3" type="text" placeholder="Enter Postal code" name="postcode" onChange={handleChange} />
                <button className=" fs-3 bg-info rounded-start rounded-3" onClick={handleSubmit}>Search</button>
            </div>
            <div className="location p-3 fs-2 ">
                <Location searchKey={searchKey} />
            </div>
        </div>
    );
}

export default Input;
