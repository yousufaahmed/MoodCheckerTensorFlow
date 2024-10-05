import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Chart() {
    const data = [
        {mood: "Happy", perc: 90},
        {mood: "Sad", perc: 10},
        {mood: "Serious", perc: 50},
        {mood: "Afraid", perc: 70},
        {mood: "Curious", perc: 20},
        {mood: "Angry", perc: 30}
      ]
  
    return (
      <div className = "chart">
        <VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            domainPadding={20}
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
            }}
            >
            <VictoryAxis
                tickValues={[1, 2, 3, 4]}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x}%`)}
            />
            <VictoryBar
                barRatio={0.8}
                data={data}
                x="mood"
                y="perc"
            />
        </VictoryChart>
      </div>
    );
  }
  
  export default Chart;