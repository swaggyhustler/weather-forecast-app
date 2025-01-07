import { useState } from "react";
import axios from 'axios';

const SearchBar = ({setData}) => {
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=22e8fa32e0d54bc09bc144901250501&q=${city.toLowerCase()}&days=10`);
        setData(result.data);
    }
    
    return (
        <form className="w-full flex gap-4 items-center" onSubmit={handleSubmit}>
            <input className="w-full bg-slate-800 my-4 rounded-lg p-2" value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Search for Cities"/>
            <button className="bg-slate-200 px-4 py-2 text-black font-semibold rounded-lg" type="submit">Search</button>
        </form>
    )
}

export default SearchBar;