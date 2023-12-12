import React, { useState } from "react";
import TrajectoryPlot from "./TrajectoryPlot";

const DataRow = ({ item }) => {
  const [showDiv, setShowDiv] = useState(false);

  const dataFormat = (dataString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dataString).toLocaleDateString("pt-BR", options);
  };

  const transportType = (type) => {
    switch (type) {
      case "car":
        return "Carro";
      case "truck":
        return "Caminhão";
      case "bus":
        return "Ônibus";
      default:
        return "Pessoa";
    }
  };
  return (
    <div className="w-full h-auto text-md flex gap-5 py-2 px-3 border-t border-red-800">
      <div className="w-1/4">{transportType(item.type)}</div>
      <div className="w-1/4">{item.velocity.toFixed(2)} Km/h</div>
      <div className="w-1/4">{dataFormat(item.start_time)}</div>
      <div className="w-1/4">{dataFormat(item.end_time)}</div>
      <div
        className="w-7 h-7 cursor-pointer border flex justify-center hover:bg-red-800 duration-500 ease-in-out group items-center rounded-full dark:bg-slate-800 dark:hover:bg-slate-900"
        onClick={() => {
          setShowDiv(!showDiv);
        }}
      >
        <i className="fa-solid fa-info text-red-800 dark:text-white group-hover:text-white duration-500 ease-in-out " />
      </div>
      <div
        className={`w-10/12 h-5/6 sm:w-2/5 p-4 bg-white flex flex-col gap-2 rounded-md top-[13%] sm:left-[30%] left-[6%] fixed duration-500 ease-in-out dark:bg-slate-900 shadow-md ${
          showDiv ? "scale-100" : "scale-0"
        }`}
      >
        <div
          onClick={() => {
            setShowDiv(!showDiv);
          }}
        >
          <div className="w-6 h-6 rounded-md duration-500 flex flex-col gap-3 justify-center items-center  cursor-pointer hover:bg-red-800 dark:hover:bg-slate-800 dark:bg-slate-900 group dark:border-white border border-red-800">
            <i className="fa-solid fa-x text-red-800 duration-500 ease-in-out group-hover:text-white dark:text-white" />
          </div>
        </div>
        <TrajectoryPlot trajectoryData={item.trajectories} />
      </div>
    </div>
  );
};

export default DataRow;
