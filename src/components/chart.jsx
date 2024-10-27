import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect } from 'react';
import '../index.css';

function Chart({moodArray}) {

  if (moodArray.length !== 13) {
    moodArray = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  };

  var moodArrayData = [
    {mood: "Playful", perc: moodArray[0]},
    {mood: "Infuriating", perc: moodArray[1]},
    {mood: "Sentimental", perc: moodArray[2]},
    {mood: "Cynical", perc: moodArray[3]},
    {mood: "Depressing", perc: moodArray[4]},
    {mood: "Awe-inspiring", perc: moodArray[5]},
    {mood: "Patriotic", perc: moodArray[6]},
    {mood: "Begrudging", perc: moodArray[7]},
    {mood: "Educational", perc: moodArray[8]},
    {mood: "Hopeful", perc: moodArray[9]},
    {mood: "Sarcastic", perc: moodArray[10]},
    {mood: "Disrespectful", perc: moodArray[11]},
    {mood: "Disparaging", perc: moodArray[12]},
  ]

    return (
      <div className = "chart">
        <VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            width = {1000}
            domainPadding={20}
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
            }}
            >
            <VictoryAxis
                tickValues={[1, 2, 3, 4]}
                fixLabelOverlap
                // style={{tickLabels: {angle: -45}}}
            />
            <VictoryAxis
                dependentAxis
            />

            <VictoryBar
                barRatio={0.8}
                data={moodArrayData}
                x="mood"
                y="perc"
            />
        </VictoryChart>
      </div>
    );
  }
  
  export default Chart;