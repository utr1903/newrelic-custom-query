import React from "react";
import { PlatformStateContext, NrqlQuery, LineChart, TableChart } from "nr1";

export default class ButtonTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      averageDuration: 0
    };
  }

  render() {
    return (
      <div>
        <PlatformStateContext.Consumer>
          {(platformState) => {
            return (
              <NrqlQuery
                accountIds={[this.props.accountId]}
                query="FROM Transaction SELECT count(*) AS 'Test' TIMESERIES"
                timeRange={platformState.timeRange}
                pollInterval={60000}
              >
                {({ data }) => {
                  if (data) {
                    return <LineChart data={data} fullWidth />;
                  }
                  else {
                    return <h3>No data found!</h3>
                  }
                }}
              </NrqlQuery>
            );
          }}
        </PlatformStateContext.Consumer>
        <PlatformStateContext.Consumer>
          {(platformState) => {
            return (
              <NrqlQuery
                accountIds={[this.props.accountId]}
                query="FROM Transaction SELECT duration AS 'Test'"
                timeRange={platformState.timeRange}
                pollInterval={60000}
              >
                {({ data }) => {
                  console.log(data);
                  if (data) {
                    const points = data[0].data;
                    for (let i=0; i<points.length; ++i) {
                      console.log(`Point: ${i}, Timestamp: ${points[i].x}, Value: ${points[i].Test}`);
                    }

                    filteredData = data.map((x) => {
                      return {
                        Timestamp: x.Timestamp
                      }
                    });

                    return <TableChart data={filteredData} fullWidth />;
                  }
                  else {
                    return <h3>No data found!</h3>
                  }
                }}
              </NrqlQuery>
            );
          }}
        </PlatformStateContext.Consumer>
      </div>
    );
  }
}
