import React from 'react';

class AppServerMetrics extends React.Component {
  render() {
    return(
      <div>
        <h1>M&eacute;tricas de los AppServers</h1>
        <p>Esta p&aacute;gina es servida externamente por DataDog(TM)</p>
        <iframe style={{width: "95%", minHeight: "800px"}} src={process.env.REACT_APP_DATADOG_STATS} title="Stats page" />
      </div>
    )
  }
}

export default AppServerMetrics;