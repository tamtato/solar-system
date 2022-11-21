import React from "react";

const InfoCard = ({ title, value }) => {
  return (
    <div className="bg-zinc-800 h-48 w-48 p-6 flex flex-col text-center justify-center">
      <div className="text-md pb-2">{title}</div>
      <div className="flex items-center justify-center text-2xl font-bold ">
        {value}
      </div>
    </div>
  );
};

export default InfoCard;
