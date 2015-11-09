import React from 'react';
import { Panel } from 'react-bootstrap';
import { Line } from 'react-chartjs';

class LineChart extends React.Component {

  render() {

    const title = (
      <h3>{this.props.title}</h3>
    );

    const mockedData = {
      labels: ['a', 'b', 'c'],
      data1: [2, 3, 5],
      data2: [2, 22, 2]
    };

    const mockedLabel = ['today', 'last week'];

    const options = {multiTooltipTemplate: '<%= datasetLabel %> - <%= value %>'};

    function setupChartOption(data, label) {
      return {
        labels: data.labels,
        datasets: [
          {
            label: label[0],
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: data.data1
          },
          {
            label: label[1],
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: data.data2
          }
        ]
      };
    }

    return (
      <Panel header={title}>
        <Line data={setupChartOption(mockedData, mockedLabel)} options={options} redraw/>
      </Panel>
    );
  }
}

export default LineChart;