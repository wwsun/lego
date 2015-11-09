import React from 'react';

import AppNavbar from './common/AppNavbar.jsx';
import AppPanel from './common/AppPanel.jsx';
import LineChart from './chart/LineChart.jsx';

class AppRoot extends React.Component {

  render() {

    return (
      <div>
        <AppNavbar></AppNavbar>

        <div className="container-fluid">

          <div className="row">
            <div className="col-md-6">
              <LineChart title="session trends"></LineChart>
            </div>

            <div className="col-md-6">
              <AppPanel title="key index"></AppPanel>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AppRoot;