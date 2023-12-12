import React from "react";

const DataRowRegister = ({ item, getRegisterId, toast }) => {
  return (
    <div className="w-full h-auto text-md flex gap-5 py-2 px-3 border-t border-red-800">
      <div className="w-1/4 sm:w-2/6">{item.id}</div>
      <div className="flex-1">{item.name}</div>
      <div
        className="w-7 h-7 cursor-pointer flex justify-center hover:bg-red-800 duration-500 ease-in-out group items-center rounded-full dark:bg-slate-800 dark:hover:bg-slate-900"
        onClick={() => {
          toast.success("Iniciando carregamento do Registro");
          getRegisterId(item.id);
        }}
      >
        <i className="fa-solid fa-cloud-arrow-down text-red-800 dark:text-white group-hover:text-white duration-500 ease-in-out " />
      </div>
    </div>
  );
};

export default DataRowRegister;
