import React from "react";
import DataRow from "./DataRow";
import DataRowRegister from "./DataRowRegister";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  const [currentRegister, setCurrentRegister] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [dataHelmet, setDataHelmet] = useState({
    total_com_capacete: "a definir",
    total_sem_capacete: "a definir",
  });
  // State
  const [state, setState] = useState(0);
  // Pagination - Transports
  const [currentPage, setCurrentPage] = useState(1);
  const itensPerPage = 7;
  const lastIndex = currentPage * itensPerPage;
  const firstIndex = lastIndex - itensPerPage;
  const sliceData = data.slice(firstIndex, lastIndex);
  const pages = Math.ceil(data.length / itensPerPage);

  // Pagination - Register
  const [dataRegister, setDataRegister] = useState([]);
  const [currentPageRegister, setCurrentPageRegister] = useState(1);
  const lastIndexRegister = currentPageRegister * itensPerPage;
  const firstIndexRegister = lastIndexRegister - itensPerPage;
  const sliceDataRegister = dataRegister?.slice(
    firstIndexRegister,
    lastIndexRegister
  );
  const pagesRegister = Math.ceil(dataRegister?.length / itensPerPage);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const averageSpeed = () => {
    if (data.length === 0) {
      return 0;
    }
    const totalSpeed = data.reduce((acc, obj) => acc + obj.velocity, 0);
    const average = totalSpeed / data.length;

    return average.toFixed(2);
  };
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", file);
      const response = await axios.post(
        "http://localhost:5000/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setName("");
      getRegister().then(() => getRegisterId(response.data))
      console.log(response.data);
    } catch (error) {
      console.error(`Erro na requisição: ${error.message}`);
    }
  };
  const getRegister = async () => {
    try {
      const response = await axios.get("http://localhost:5000/register/", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (Array.isArray(response.data)) {
        setDataRegister(response.data);
      } else {
        setDataRegister([]);
      }
    } catch (error) {
      console.error(`Erro na requisição: ${error.message}`);
    }
  };
  const getRegisterId = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/register/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData(response.data.veiculos);
      setCurrentRegister(response.data.name);
      setDataHelmet(response.data.capacete);
      setCurrentPage(1);
      setState(1);
      console.log(response.data);
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.error(`Erro na requisição: ${error.message}`);
    }
  };

  useEffect(() => {
    getRegister();
  }, []);

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
            Adicione um novo registro
          </div>
          <form
            action=""
            className="w-full h-auto flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Arquivo enviado com sucesso!");
              handleSubmit();
            }}
          >
            <div className="w-full flex gap-3">
              <input
                type="text"
                className="w-3/12 h-auto p-2 rounded-lg border border-red-800 text-lg font-semibold text-red-800 dark:text-white dark:bg-slate-800 dark:border-white duration-500 ease-in-out outline-none"
                placeholder="Título do Registro"
                value={name}
                required
                onChange={handleNameChange}
              />
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
                className="px-4 py-2 lg:w-3/12 sm:w-3/12 text-center rounded-lg border border-red-800 text-red-800 tetx-lg font-semibold duration-500 ease-in-out hover:bg-red-800 hover:text-white cursor-pointer dark:text-white dark:border-white dark:bg-slate-800 dark:hover:bg-slate-900"
              >
                Anexar Arquivo
              </label>
            </div>
            <button
              type="submit"
              className="w-2/12 px-3 py-2 text-lg border border-red-800 text-red-800 font-semibold hover:bg-red-800 hover:text-white duration-500 ease-in-out dark:border-white dark:text-white dark:hover:bg-slate-900 rounded-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="rounded-md bg-white shadow-lg h-auto lg:h-2/6 p-6 dark:border-red-800 border dark:bg-slate-800 duration-500 ease-in-out">
        <div className="w-full text-red-800 text-lg font-medium h-auto dark:text-white duration-500 ease-in-out">
          Dados
        </div>
        <div className="w-full flex gap-4 flex-1 flex-wrap">
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-32 text-white border border-red-800 p-5 shadow-md dark:border-white duration-500 ease-in-out">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-md font-semibold text-slate-500 dark:text-slate-300 duration-500 ease-in-out">
                Quantidade de Objetos
              </div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                {data.length}
              </div>
            </div>

            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-car-side text-white"></i>
            </div>
          </div>

          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-32 text-white border border-red-800 p-5 shadow-md dark:border-white duration-500 ease-in-out">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-md font-semibold text-slate-500 dark:text-slate-300 duration-500 ease-in-out">
                Capacete
              </div>
              <div className="text-xl text-red-800 dark:text-white duration-500 ease-in-out">
                Com: {data.length ? dataHelmet.total_com_capacete : "a definir"}
              </div>
              <div className="text-xl text-red-800 dark:text-white duration-500 ease-in-out">
                Sem: {data.length ? dataHelmet.total_sem_capacete : "a definir"}
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-helmet-un text-white"></i>
            </div>
          </div>
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-32 text-white border border-red-800 dark:text-white duration-500 ease-in-out p-5 shadow-md dark:border-white">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-md font-semibold text-slate-500 dark:text-slate-300 duration-500 ease-in-out">
                Velocidade Média Total
              </div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                {averageSpeed()} km/h
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-gauge-high text-white"></i>
            </div>
          </div>
          <div className="flex w-full sm:w-2/5 lg:flex-1 gap-1 rounded-lg h-32 text-white border border-red-800 dark:text-white duration-500 ease-in-out p-5 shadow-md dark:border-white">
            <div className="w-3/4 h-auto flex flex-col gap-1 font-semibold">
              <div className="text-md font-semibold text-slate-500 dark:text-slate-300 duration-500 ease-in-out">
                Registros
              </div>
              <div className="text-2xl text-red-800 dark:text-white duration-500 ease-in-out">
                {dataRegister?.length}
              </div>
            </div>
            <div className="w-14 h-14 p-5 flex justify-center items-center rounded-full bg-red-800">
              <i className="fa-solid fa-file text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white text-red-800 dark:text-white font-medium shadow-lg h-auto px-6 py-4 flex flex-col gap-2 dark:border-red-800 border dark:bg-slate-800 duration-500 ease-in-out">
        <div className="w-full h-auto flex gap-3 justify-start">
          <div
            className={`text-lg font-semibold p-2 rounded-xl border cursor-pointer border-red-800 dark:border-white duration-500 ease-out ${
              state === 0 ? "bg-red-800 text-white dark:bg-slate-900" : ""
            }`}
            onClick={() => setState(0)}
          >
            Registros
          </div>
          <div
            className={`text-lg font-semibold p-2 rounded-xl border cursor-pointer border-red-800 dark:border-white duration-500 ease-out ${
              state === 1 ? "bg-red-800 text-white dark:bg-slate-900" : ""
            }`}
            onClick={() => setState(1)}
          >
            Objetos
          </div>
          <div className="text-lg font-semibold flex justify-center items-center text-red-800 dark:text-white duration-500 ease-in-out">
            {currentRegister}
          </div>
        </div>
        <div
          className={`w-full h-auto dark:text-white text-red-800 flex-col gap-2 ${
            state === 0 ? "flex" : "hidden"
          }`}
        >
          <div className="w-full h-auto border border-red-800 rounded-md shadow-md">
            <div className="w-full h-auto text-md flex gap-5 bg-red-800 text-white py-2 px-3">
              <div className="w-1/4 sm:w-2/6 flex items-center">Id</div>
              <div className="w-1/4 sm:flex-1 flex items-center">Título</div>
              <div className="flex items-center">Carregar Registro</div>
            </div>
            {sliceDataRegister?.map((item, index) => {
              return (
                <DataRowRegister
                  key={index}
                  item={item}
                  toast={toast}
                  getRegisterId={getRegisterId}
                />
              );
            })}
          </div>
          <div className="w-full px-1 flex my-5 items-center">
            <i
              className={`fa-solid fa-chevron-left text-red-800 duration-500 ease-in-out dark:text-white  ${
                currentPageRegister !== 1
                  ? "cursor-pointer hover:text-red-950 dark:hover:text-slate-300"
                  : ""
              }`}
              onClick={() => {
                currentPageRegister !== 1 &&
                  setCurrentPageRegister(currentPageRegister - 1);
              }}
            ></i>
            <span className="text-red-800 text-lg font-medium mx-2 dark:text-white">
              {currentPageRegister}
            </span>
            <i
              className={`fa-solid fa-chevron-right text-red-800 duration-500 ease-in-out dark:text-white ${
                currentPageRegister !== pagesRegister
                  ? "cursor-pointer hover:text-red-950 dark:hover:text-slate-300"
                  : ""
              }`}
              onClick={() => {
                currentPageRegister !== pagesRegister &&
                  setCurrentPageRegister(currentPageRegister + 1);
              }}
            ></i>
          </div>
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
              <div className="w-1/4 sm:w-2/6 flex items-center">
                Tempo inicial
              </div>
              <div className="w-1/4 sm:w-2/6 flex items-center">
                Tempo Final
              </div>
              <div className="w-7 invisible">info</div>
            </div>
            {sliceData.map((item, index) => {
              return <DataRow key={index} item={item} />;
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
