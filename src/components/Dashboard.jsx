import React from "react";
import DataRow from "./DataRow";
import { useState, useEffect, useRef } from "react";
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
  // State
  const [state, setState] = useState(0);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itensPerPage = 7;
  const lastIndex = currentPage * itensPerPage;
  const firstIndex = lastIndex - itensPerPage;
  const sliceData = data.slice(firstIndex, lastIndex);
  const pages = Math.ceil(data.length / itensPerPage);

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    handleUpload();
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Upload feito com sucesso");
      console.log(response.data);
    } catch (error) {
      toast.error("Error ao realizar o upload");
      console.error(response.data);
    }
  };

  return (
    <div
      className={`flex-1 flex flex-col gap-5 pl-20 pr-8 py-5 scene dark:bg-slate-900 duration-500 ease-in-out`}
    >
      <div className="rounded-md bg-white dark:bg-slate-800 duration-500 ease-in-out shadow-lg py-3 justify-between h-auto sm:py-3 sm:h-1/6 flex items-center px-6 dark:border-red-800 border flex-wrap">
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
            alt="Imagem da Universidade Federal do Ceará"
          />
        </div>
      </div>

      <div className="rounded-md bg-white shadow-lg py-3 justify-between h-auto sm:py-3 sm:h-auto flex items-center px-6 dark:border-red-800 border flex-wrap dark:bg-slate-800 duration-500 ease-in-out">
        <div className="w-full h-auto flex flex-col gap-1 sm:w-2/3 lg:w-8/12">
          <div className="text-md text-slate-400 font-medium">
            Processamento
          </div>
          <div className="text-xl text-red-800 font-semibold dark:text-white duration-500 ease-in-out">
            Selecione o arquivo a ser analisado
          </div>
          <form action="" className="w-full h-auto flex flex-col gap-2">
            <input
              type="file"
              name="file"
              id="file"
              className="hidden"
              required
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className="px-4 py-2 lg:w-3/12 sm:w-3/12 text-center rounded-lg shadow-lg border border-red-800 text-red-800 tetx-lg font-semibold duration-500 ease-in-out hover:bg-red-800 hover:text-white cursor-pointer dark:text-white dark:border-white dark:bg-slate-800 dark:hover:bg-slate-900"
            >
              Anexar Arquivo
            </label>
          </form>
        </div>
      </div>
      <div className="rounded-md bg-white shadow-lg h-auto lg:h-2/6 p-6 dark:border-red-800 border dark:bg-slate-800 duration-500 ease-in-out">
        <div className="w-full text-red-800 text-lg font-medium h-auto dark:text-white duration-500 ease-in-out">
          Dados
        </div>
        <div className="w-full flex gap-4 flex-1 flex-wrap">
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-full text-white border border-red-800 p-5 shadow-md dark:border-white duration-500 ease-in-out">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-md font-semibold text-slate-500 dark:text-slate-300 duration-500 ease-in-out">
                Quantidade de Transportes
              </div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                20
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-car-side text-white"></i>
            </div>
          </div>
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-full text-white border border-red-800 dark:text-white duration-500 ease-in-out p-5 shadow-md dark:border-white">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-md font-semibold text-slate-500 dark:text-slate-300 duration-500 ease-in-out">
                Velocidade Média Total
              </div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                43km/h
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-gauge-high text-white"></i>
            </div>
          </div>
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-full text-white border border-red-800 dark:text-white duration-500 ease-in-out p-5 shadow-md dark:border-white">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-md font-semibold text-slate-500 dark:text-slate-300 duration-500 ease-in-out">
                Infrações
              </div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                34
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-file text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white text-red-800 dark:text-white font-medium shadow-lg h-auto px-6 py-4 flex flex-col gap-2 dark:border-red-800 border dark:bg-slate-800 duration-500 ease-in-out">
        <div className="w-full h-auto flex gap-2 justify-start">
          <div
            className={`text-lg font-semibold p-2 rounded-xl border cursor-pointer border-red-800 dark:border-white duration-500 ease-out ${
              state === 0 ? "bg-red-800 text-white dark:bg-slate-900" : ""
            }`}
            onClick={() => setState(0)}
          >
            Trajetórias
          </div>
          <div
            className={`text-lg font-semibold p-2 rounded-xl border cursor-pointer border-red-800 dark:border-white duration-500 ease-out ${
              state === 1 ? "bg-red-800 text-white dark:bg-slate-900" : ""
            }`}
            onClick={() => setState(1)}
          >
            Transportes
          </div>
        </div>
        <div
          className={`w-full h-auto dark:text-white text-red-800 flex-col gap-2 ${
            state === 0 ? "flex" : "hidden"
          }`}
        >
          Trajetórias
        </div>
        <div
          className={`w-full h-auto flex-col gap-2 ${
            state === 1 ? "flex" : "hidden"
          }`}
        >
          <div className="w-full h-auto border border-red-800 rounded-md shadow-md">
            <div className="w-full h-auto text-md flex gap-5 bg-red-800 text-white py-2 px-3">
              <div className="w-1/4 sm:w-2/6 flex items-center">Categoria</div>
              <div className="w-1/4 sm:w-2/6 flex items-center">
                Velocidade Média
              </div>
              <div className="w-1/4 sm:w-2/6 flex items-center invisible">
                Placa
              </div>
              <div className="w-7 invisible">info</div>
            </div>
            {sliceData.map((item, index) => {
              return (
                <DataRow
                  key={index}
                  category={item.category}
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
    </div>
  );
};

export default Dashboard;
