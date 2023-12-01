import React, { useState } from "react";

const DataRow = ({ category, speed, plate }) => {
  const [showDiv, setShowDiv] = useState(false);
  return (
    <div className="w-full h-auto text-md flex gap-5 py-2 px-3 border-t border-red-800">
      <div className="w-1/4 sm:w-2/6">{category}</div>
      <div className="w-1/4 sm:w-2/6">{speed}Km/h</div>
      <div className="w-1/4 sm:w-2/6">{plate}</div>
      <div
        className="w-7 h-7 border-red-800 cursor-pointer border flex justify-center hover:bg-red-800 duration-500 ease-in-out group items-center rounded-full dark:bg-red-800 dark:hover:bg-white"
        onClick={() => {
          setShowDiv(!showDiv);
        }}
      >
        <i className="fa-solid fa-info text-red-800 dark:text-white dark:group-hover:text-red-800 group-hover:text-white duration-500 ease-in-out" />
      </div>
      <div
        className={`w-10/12 h-2/3 sm:w-2/5 bg-white flex flex-col gap-5 rounded-md border-red-800 border top-[20%] sm:left-[30%] left-[6%] fixed duration-500 ease-in-out shadow-lg dark:bg-slate-700 ${
          showDiv ? "scale-100" : "scale-0"
        }`}
      >
        <div
          onClick={() => {
            setShowDiv(!showDiv);
          }}
        >
          <div className="w-6 h-6 rounded-sm duration-500 flex flex-col gap-3 justify-center items-center  cursor-pointer hover:bg-red-800 dark:bg-red-800 dark:hover:bg-white group">
            <i className="fa-solid fa-x text-red-800 duration-500 ease-in-out group-hover:text-white dark:text-white dark:group-hover:text-red-800" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 justify-center items-center text-red-800">
          <div className="w-3/4 flex flex-col gap-1">
            <div className="text-md text-slate-400 font-medium">Lorem</div>
            <div className="text-xl text-red-800 dark:text-white duration-500 ease-in-out px-4 py-2 font-semibold border border-red-800 rounded-md dark:border-slate-300">
              Dados
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-1">
            <div className="text-md text-slate-400 font-medium">Lorem</div>
            <div className="text-xl text-red-800 dark:text-white duration-500 ease-in-out px-4 py-2 font-semibold border border-red-800 rounded-md dark:border-slate-300">
              Dados
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-1">
            <div className="text-md text-slate-400 font-medium">Lorem</div>
            <div className="text-xl text-red-800 dark:text-white duration-500 ease-in-out px-4 py-2 font-semibold border border-red-800 rounded-md dark:border-slate-300">
              Dados
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-1">
            <div className="text-md text-slate-400 font-medium">Lorem</div>
            <div className="text-xl text-red-800 dark:text-white duration-500 ease-in-out px-4 py-2 font-semibold border border-red-800 rounded-md dark:border-slate-300">
              Dados
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRow;
