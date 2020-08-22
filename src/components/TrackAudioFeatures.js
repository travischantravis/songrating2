import React from "react";
import { VictoryChart, VictoryBar, VictoryLegend } from "victory";

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

const legendFeatures = features.map((feature) => ({ name: feature }));

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
  console.log(audioFeatures);
  console.log(filtered);
  console.log(legendFeatures);

  return (
    <div className="audio-feature">
      <VictoryChart height={220} width={350} domainPadding={10}>
        <VictoryBar data={filtered} x={0} y={1} barWidth={20} />
        <VictoryLegend orientation="vertical" data={legendFeatures} y={200} />
      </VictoryChart>
    </div>
  );
};

export default TrackAudioFeatures;
