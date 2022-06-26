function NoData(props) {
    return (
      <div className="nodataclass">
        <h1 className="nodataclassh1">{props.noData}</h1>
        <br />
        <br/>
        <h1 className="nodataclassh1">{props.loading}</h1>
        <br/>
        <p className="nodataclassp">{props.enterLoc}</p>
      </div>
    );
  }
  
  export default NoData;
  