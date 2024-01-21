import React, { useState, useEffect } from "react";
import RatesList from "../ratesList/RatesList";
import "./Rates.css";

function Rates(): JSX.Element {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    void fetch("http://localhost:3000/api/rates")
      .then((res) => res.json())
      .then((data) => setRates(data));
  }, []);
  return (
    <div className="rates-container">
      <RatesList rates={rates} />
    </div>
  );
}

export default Rates;
