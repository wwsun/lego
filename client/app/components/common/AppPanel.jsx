import React from 'react';
import { Panel } from 'react-bootstrap';

class AppPanel extends React.Component {

  render() {

    const title = (
      <h3>panel title</h3>
    );

    return (
        <Panel header={title}>
          panel body
        </Panel>
    );

  }
}

export default AppPanel;