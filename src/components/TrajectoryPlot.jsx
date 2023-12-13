import React from "react";
import Plot from "react-plotly.js";

const TrajectoryPlot = ({ trajectoryData }) => {
  const trace = {
    x: trajectoryData.map((point) => point.x),
    y: trajectoryData.map((point) => point.y),
    mode: "markers",
    type: "scatter",
    name: "Trajectory",
  };

  const layout = {
    title: "Trajectory Plot",
    xaxis: { title: "X Coordinate", range: [0, 1000] }, // Defina a escala no eixo x
    yaxis: { title: "Y Coordinate", range: [0, 1000] }, // Defina a escala no eixo y
  };

  return <Plot data={[trace]} layout={layout} />;
};

export default TrajectoryPlot;
