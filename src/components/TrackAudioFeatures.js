import React from "react";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";
import chroma from "chroma-js";

const features = [
  "acousticness",
  "danceability",
  "energy",
  "liveness",
  "loudness",
  "speechiness",
  "tempo",
  "valence",
];

const colorScale = chroma.scale(["yellow", "lightgreen"]).mode("lrgb");

const processFeatures = (raw) => {
  let filtered = Object.keys(raw)
    .filter((key) => features.includes(key))
    .reduce((obj, key) => {
      obj[key] = raw[key];

      // Convert some features into scale of 0 to 1
      if (key === "loudness") {
        obj[key] = parseFloat(((raw[key] + 60) / 60).toFixed(2));
      }
      if (key === "tempo") {
        obj[key] = parseFloat((raw[key] / 250).toFixed(2));
      }
      return obj;
    }, {});

  // Convert to an array of arrays
  filtered = Object.entries(filtered);

  // Sort according to key
  filtered.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  return filtered;
};

const TrackAudioFeatures = (props) => {
  const { audioFeatures } = props;

  let filtered = processFeatures(audioFeatures);

  return (
    <div className="audio-feature">
      <VictoryChart height={250} width={350} domainPadding={10}>
        <VictoryBar
          data={filtered}
          x={0}
          y={1}
          barWidth={20}
          style={{
            data: {
              fill: (d) => {
                const yData = d.datum["1"];
                return colorScale(yData);
              },
            },
          }}
        />
        <VictoryAxis
          style={{
            tickLabels: {
              padding: 1,
              angle: 70,
              verticalAnchor: "start",
              textAnchor: "start",
            },
          }}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </div>
  );
};

export default TrackAudioFeatures;
