import {useState} from 'react';
import axios from 'axios';

function App() {

  const [location,setlocation] = useState('');
  const [data,setdata] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bf3c1dd500d190c7c669e9eac528ba37&units=metric`




 

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      // axios.get(url).then((response) => {
      //   //setData(response.data)
      //   console.log(response.data)
      // })
      fetch(url)
      .then((response)=>{
        return response.json();
      })
      .then((resp)=>{
        console.log(resp);
        setdata(resp);
      })
      setlocation('');
    }
  }





  return (
    <div className="app">
      <div className="container">
         <div className="search">
          <input type="search" name="" id="" value={location} onChange={(e)=>setlocation(e.target.value)} onKeyDown={searchLocation} />
         </div>
         <div className="name">
         <p>{data.name}</p> 
          
               </div>
            <div className="temperature">
           {data.main ? <p>{data.main.temp}</p> : null}
            </div>

         { data.main ? <div className="bottom">
             <div className="feels">
              <p>Feels Like</p>
              {data.main ? <p>{data.main.feels_like}</p>:null}
             </div>
              <div className="humidity">
                <p>Humidty</p>
                {data.main ? <p>{data.main.humidity}</p>:null}
              </div>
              <div className="wind">
                <p>Wind Speed</p>
                {data.main ? <p>{data.wind.speed}</p> : null}
              </div>
            </div> : null}  

      </div>
    </div>
  );
}

export default App;
