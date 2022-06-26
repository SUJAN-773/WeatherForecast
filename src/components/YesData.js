import MoreData from "./MoreData";
import Days from "./Days";
import Month from "./Months";

function YesData(props) {
  return (
    <div className="yesdataclass">
      <h1 className="yesdataclassh1">Today</h1>
      <div className="todayforecast">
        <div className="todayforecastleft">
          <p className="todaytemp" style={{ marginLeft: '10px'}}>{Math.round(props.data.list[0].main.temp)} &deg;C</p>
          <p className="weathercondition" style={{ marginLeft: '10px'}}>{props.data.list[0].weather[0].main}</p>
          <p className="Description" style={{ marginLeft: '10px'}}>{props.data.list[0].weather[0].description}</p>
          <p className="date" style={{ marginLeft: '10px'}}>{Days[new Date(props.data.list[0].dt_txt).getDay()]} {Month[new Date(props.data.list[0].dt_txt).getMonth()]}, {new Date(props.data.list[0].dt_txt).getDate()}</p>
        </div>
        <div className="todayforecastright">
          <p className="realfeel">Real Feel: {Math.round(props.data.list[0].main.feels_like)} &deg;C</p>
          <p className="Humidity">Humidity: {Math.round(props.data.list[0].main.humidity)}%</p>
          <p className="pressure">Pressure: {Math.round(props.data.list[0].main.pressure)} hPa</p>
          <p className="mintemp">Min Temp: {Math.round(props.data.list[0].main.temp_min)} &deg;C</p>
          <p className="maxtemp">Max temp: {Math.round(props.data.list[0].main.temp_max)} &deg;C</p>
        </div>
        <div className="image">
          <img
            className="weathericon"
            src={props.ICON_URL+props.data.list[1].weather[0].icon+"@2x.png"}
            alt="weatherIcon"
          />
        </div>
      </div>
      <p className="moreonloc">More on {props.data.city.name}, {props.data.city.country}</p>
      <table>
        <tbody>
          <tr>
            <td>
              <MoreData data={props.data} i={1} ICON_URL={props.ICON_URL}/>
            </td>
            <td>
              <MoreData data={props.data} i={2} ICON_URL={props.ICON_URL}/>
            </td>
          </tr>
          <tr>
            <td>
              <MoreData data={props.data} i={3} ICON_URL={props.ICON_URL}/>
            </td>
            <td>
              <MoreData data={props.data} i={4} ICON_URL={props.ICON_URL}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default YesData;
