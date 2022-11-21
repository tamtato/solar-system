import React from "react";
import Title from "../../../components/Title";
import InfoCard from "../../../components/InfoCard";

const BodyInfo = ({ title, infoCards }) => {
  return (
    <>
      <Title title={title} />
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0 mt-6 mb-12">
        {infoCards.map(card => (
          <InfoCard title={card.title} value={card.value} />
        ))}
      </div>
    </>
  );
};

export default BodyInfo;
