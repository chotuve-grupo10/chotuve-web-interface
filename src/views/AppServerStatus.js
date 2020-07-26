import React from 'react';

class AppServerStatus extends React.Component {
  render() {
    return(
      <div>
        <h1>Estado de los AppServers</h1>
        <p>Esta p&aacute;gina es servida externamente por UptimeRobot(TM)</p>
        <iframe style={{width: "95%", minHeight: "800px"}} src={process.env.REACT_APP_UPTIME_ROBOT_STATUS_PAGE} title="Status page" />
      </div>
    )
  }
}

export default AppServerStatus;