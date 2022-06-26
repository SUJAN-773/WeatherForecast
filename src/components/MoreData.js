import Days from "./Days";

function MoreData(props) {
    return (
      <>
        <div className="tdleft">
          <p className="tdtodaytemp">{Math.round(props.data.list[props.i].main.temp)} &deg;C</p>
          <p className="tdweathercondition">{props.data.list[props.i].weather[0].main}</p>
          <p className="tdDescription">Windspeed: {props.data.list[props.i].wind.speed}m/s</p>
          <p className="tddate">{Days[new Date(props.data.list[props.i].dt_txt).getDay()]}, {props.data.list[props.i].dt_txt.substring(11,16)}</p>
        </div>
        <div className="tdimage">
          <img
            className="tdweathericon4"
            src={props.ICON_URL+props.data.list[props.i].weather[0].icon+"@2x.png"}
            alt="weatherIcon"
          />
        </div>
      </>
    );
  }
  
  export default MoreData;
  