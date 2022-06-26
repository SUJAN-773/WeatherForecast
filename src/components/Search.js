import { useState } from "react";
import YesData from "./YesData";
import NoData from "./NoData";

function Search() {
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast?";
  const API_KEY = "b5caa54b500c4e5028c7929dde3c5cc7";
  const ICON_URL = "http://openweathermap.org/img/wn/";
  let [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState("No Data Yet");
  const [enterLoc, setEnterLoc] = useState("Enter a location to search");
  const [loading, setLoading] = useState("");

  const submitted = (e) => {
    e.preventDefault();
    setNoData('');
    setEnterLoc('');
    setLoading("Loading.....");
    const URL = `${API_URL}q=${city}&appid=${API_KEY}&units=metric&cnt=10`;
    getWeather(URL);
  };
  function getMyLocation() {
    setNoData('');
    setEnterLoc('');
    setLoading("Loading.....");
    if (!navigator.geolocation) {
      console.log("OoPs!! Something is fishyyy...");
    } else {
      //console.log("Checking location...");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  function success(position) {
    //console.log(position);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const URL = `${API_URL}lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric&cnt=10`;
    getWeather(URL);
  }
  function error() {
    alert("Geolocation error!");
  }

  async function getWeather(URL) {
    setData([]);
    try {
      const res = await fetch(URL);
      //console.log(res);
      if (!res.ok) {
        throw new Error("No weather Found");
      }
      const weatherData = await res.json();
      //console.log(weatherData);
      setData(weatherData);
    } catch {
      setLoading('');
      setEnterLoc('Enter a location to search');
      setNoData('No Data Yet');
      alert("No Location Found");
    }
  }
  return (
    <div className="leftplusright">
      <div className="leftdiv">
        <img
          src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
          alt="just a simple background "
        />
        <div className="lefttop">
          <h1 className="forecastleft">Forecast</h1>
          <h1 className="weatherright">
            <i className="fa fa-map"></i> Weather
          </h1>
        </div>
        <form  onSubmit={submitted} className="formmain">
          <div className="formclass">
            <p className="formdes">About the City you need to know</p>
            <hr />
            <div>
              <input
                className="inputsearch"
                type="text"
                name="city"
                placeholder="Enter a City"
                onChange={(input) => {
                  const { value } = input.target;
                  //console.log(value);
                  setCity(value);
                }}
                required
              />
              <button className="formbutton" type="submit">
                <i className="fa fa-search"></i>
              </button>
              <button className="currentlocation" onClick={getMyLocation}>
                <i className="fa fa-map-marker"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="rightdiv">
        {data.length === 0 ? (
          <NoData 
            noData={noData}
            loading={loading}
            enterLoc={enterLoc}
          />
        ) : (
          <YesData data={data} ICON_URL={ICON_URL} />
        )}
      </div>
    </div>
  );
}

export default Search;
