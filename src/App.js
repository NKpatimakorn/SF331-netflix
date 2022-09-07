import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
        axios.get(`http://netflix.sf331.site/movies.json`).then((response) => {
            setMovie(response.data);
        });
    },[])
  return (
    <div className="">
        <h1>TU-Flix</h1>
        {movie.map(m =>
            <div>
                <h3>{m.Title}</h3>
                <p>{m.Plot}</p>
            </div>
        )}
    </div>
  );
}

export default App;
