import React from "react";
import DataRow from "./DataRow";
import { useState } from "react";
import { toast } from "react-toastify";
// import { alpha, styled } from "@mui/material/styles";
// import { red } from "@mui/material/colors";
// import Switch from "@mui/material/Switch";
import axios from "axios";

const data = [
  {
    category: "Carro",
    speed: 43,
    plate: "123ABCD",
  },
  {
    category: "Moto",
    speed: 60,
    plate: "456EFGH",
  },
  {
    category: "Carro",
    speed: 55,
    plate: "789IJKL",
  },
  {
    category: "Moto",
    speed: 72,
    plate: "123MNPQ",
  },
  {
    category: "Carro",
    speed: 40,
    plate: "456RSTU",
  },
  {
    category: "Moto",
    speed: 68,
    plate: "789VWXY",
  },
  {
    category: "Carro",
    speed: 50,
    plate: "123ZABC",
  },
  {
    category: "Moto",
    speed: 75,
    plate: "456DEFG",
  },
  {
    category: "Carro",
    speed: 47,
    plate: "789HIJK",
  },
  {
    category: "Moto",
    speed: 63,
    plate: "123LMNO",
  },
];

const Dashboard = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itensPerPage = 7;
  const lastIndex = currentPage * itensPerPage;
  const firstIndex = lastIndex - itensPerPage;
  const sliceData = data.slice(firstIndex, lastIndex);
  const pages = Math.ceil(data.length / itensPerPage);
  return (
    <div
      className={`h-auto flex-1 flex flex-col gap-5 pl-20 pr-8 py-5 scene dark:bg-slate-900 duration-500 ease-in-out`}
    >
      <div className="rounded-md bg-white dark:bg-slate-800 duration-500 ease-in-out shadow-lg py-3 justify-between h-auto sm:py-3 sm:h-1/6 flex items-center px-6 border-slate-100 border flex-wrap">
        <div className="w-full h-auto flex flex-col sm:w-2/3 lg:w-8/12">
          <div className="text-md text-slate-400 font-medium">Principal</div>
          <div className="text-xl text-red-800 font-semibold dark:text-white duration-500 ease-in-out">
            Dashboard
          </div>
        </div>
        <div className="flex-1 flex gap-3 items-center">
          <div className="text-lg text-red-800 font-medium dark:text-white duration-500 ease-in-out">
            Processamento Digital de Imagens
          </div>
          <img
            src="images/ufc.png"
            className="w-11 h-11 rounded-full border border-red-800 shadow-lg dark:border-white duration-500 ease-in-out"
            alt="Imagem do Admin"
          />
        </div>
      </div>
      <div className="rounded-md bg-white shadow-lg h-auto lg:h-2/6 p-6 border-slate-100 border dark:bg-slate-800 duration-500 ease-in-out">
        <div className="w-full text-red-800 text-lg font-medium h-auto dark:text-white duration-500 ease-in-out">
          Dados
        </div>
        <div className="w-full flex gap-4 flex-1 flex-wrap">
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-full text-white border border-red-800 p-5 shadow-md dark:border-white duration-500 ease-in-out">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-xs text-slate-500">Lorem Ipsum</div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                20
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-user text-white"></i>
            </div>
          </div>
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-full text-white border border-red-800 dark:text-white duration-500 ease-in-out p-5 shadow-md dark:border-white">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-xs text-slate-500">Lorem Ipsum</div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                12
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-file-invoice text-white"></i>
            </div>
          </div>
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-full text-white border border-red-800 dark:text-white duration-500 ease-in-out p-5 shadow-md dark:border-white">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-xs text-slate-500">Lorem Ipsum</div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                34
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-database text-white"></i>
            </div>
          </div>
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-full text-white border border-red-800 dark:text-white duration-500 ease-in-out p-5 shadow-md dark:border-white">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-xs text-slate-500">Lorem Ipsum</div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                7
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-message text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white shadow-lg py-3 justify-between h-auto sm:py-3 sm:h-auto flex items-center px-6 border-slate-100 border flex-wrap dark:bg-slate-800 duration-500 ease-in-out">
        <div className="w-full h-auto flex flex-col sm:w-2/3 lg:w-8/12">
          <div className="text-md text-slate-400 font-medium">lorem</div>
          <div className="text-xl text-red-800 font-semibold dark:text-white duration-500 ease-in-out">
            Lorem Ipsum
          </div>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            onChange={() => {
              toast.success("Arquivo upado com sucesso!");
            }}
          />
          <label
            htmlFor="file"
            className="px-4 py-2 lg:w-2/12 sm:w-3/12 text-center rounded-lg shadow-lg border border-red-800 text-red-800 tetx-lg font-semibold duration-500 ease-in-out hover:bg-red-800 hover:text-white cursor-pointer dark:text-white dark:bg-red-800 dark:hover:text-red-800 dark:hover:bg-white"
          >
            Anexar Arquivo
          </label>
        </div>
      </div>
      <div className="rounded-md bg-white text-red-800 dark:text-white font-medium shadow-lg h-auto px-6 py-4 flex flex-col gap-2 border-slate-100 border dark:bg-slate-800 duration-500 ease-in-out">
        <div className="w-full text-lg h-auto font-semibold">Lorem Ipsum</div>
        <div className="w-full h-auto border border-red-800 rounded-md shadow-md">
          <div className="w-full h-auto text-md flex gap-5 bg-red-800 text-white py-2 px-3">
            <div className="w-1/4 sm:w-2/6 flex items-center">Categoria</div>
            <div className="w-1/4 sm:w-2/6 flex items-center">
              Velocidade Média
            </div>
            <div className="w-1/4 sm:w-2/6 flex items-center">Placa</div>
            <div className="w-7 invisible">info</div>
          </div>
          {sliceData.map((item, index) => {
            return (
              <DataRow
                key={index}
                category={item.category}
                plate={item.plate}
                speed={item.speed}
              />
            );
          })}
        </div>
        <div className="w-full px-1 flex my-5 items-center">
          <i
            className={`fa-solid fa-chevron-left text-red-800 duration-500 ease-in-out dark:text-white  ${
              currentPage !== 1
                ? "cursor-pointer hover:text-red-950 dark:hover:text-slate-300"
                : ""
            }`}
            onClick={() => {
              currentPage !== 1 && setCurrentPage(currentPage - 1);
            }}
          ></i>
          <span className="text-red-800 text-lg font-medium mx-2 dark:text-white">
            {currentPage}
          </span>
          <i
            className={`fa-solid fa-chevron-right text-red-800 duration-500 ease-in-out dark:text-white ${
              currentPage !== pages
                ? "cursor-pointer hover:text-red-950 dark:hover:text-slate-300"
                : ""
            }`}
            onClick={() => {
              currentPage !== pages && setCurrentPage(currentPage + 1);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
