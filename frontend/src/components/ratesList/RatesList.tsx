import React from "react";
import RatesItem from "../ratesItem/RatesItem";
import "./RatesList.css";

interface RatesListProps {
  rates: Array<{ name: string; price: string }>;
}

const RatesList: React.FC<RatesListProps> = ({ rates }): JSX.Element => {
  return (
    <div className="rates-list-container">
      {rates.map((rate, index) => (
        <RatesItem key={index} rate={rate} />
      ))}
    </div>
  );
};

export default RatesList;
