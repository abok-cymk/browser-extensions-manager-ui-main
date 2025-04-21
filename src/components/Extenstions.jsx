import { ToggleLeft, ToggleRight } from "lucide-react";
import React from "react";

const Extenstions = ({ logo, name, description, isActive, handleRemove }) => {
  return (
    <div className="bg-white shadow rounded-lg py-2 px-3 h-auto w-full">
      <div className="flex flex-col justify-between gap-6">
        <div className="flex gap-3">
          <img src={logo} alt={name} className="h-12 w-12 object-cover" />
          <div>
            <h4 className="text-sm font-700 pb-1">{name}</h4>
            <p className="text-xs text-neutral-500 font-500">{description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button 
          onClick={() => handleRemove(name)}
          className="text-xs font-500 bg-neutral-0 hover:bg-custom-red-700 hover:text-neutral-0 outline outline-neutral-200 focus:ring-custom-red-700 rounded-full cursor-pointer px-2 py-1">
            Remove
          </button>
          {isActive == true ? (
            <ToggleRight className="text-custom-red-700 cursor-pointer focus:ring-custom-red-700 focus:ring-1" />
          ) : (
            <ToggleLeft className="cursor-pointer focus:ring-custom-red-700 focus:ring-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Extenstions;
