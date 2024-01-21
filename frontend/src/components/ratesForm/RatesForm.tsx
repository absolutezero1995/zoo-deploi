import React, { useState, useEffect } from "react";
import "./RatesForm.css";

export default function RatesForm() {
  const [adultsWeekday, setAdultsWeekday] = useState("");
  const [childrenWeekday, setChildrenWeekday] = useState("");
  const [adultsWeekend, setAdultsWeekend] = useState("");
  const [childrenWeekend, setChildrenWeekend] = useState("");
  const [messageForAdmin, setMessage] = useState("");
  // const [isButtonDisabled, setButtonDisabled] = useState(false);



  //
  async function fetchRates() {
    const response = await fetch("http://localhost:3000/api/rates");
    const currentPrice = await response.json();
    return currentPrice;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentPrice = await fetchRates();
        setAdultsWeekday(currentPrice[0].price);
        setChildrenWeekday(currentPrice[1].price);
        setAdultsWeekend(currentPrice[2].price);
        setChildrenWeekend(currentPrice[3].price);
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };
  
    fetchData();
  }, []);

  const handleEditRates = async (): Promise<void> => {
    try {
      const editRates = await fetch("http://localhost:3000/api/rates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adultsWeekday, childrenWeekday, adultsWeekend, childrenWeekend }),
      });
      const data = await editRates.json();
      if (data.message === "success") {
        setMessage("Rates have been successfully changed");
      } else {
        throw new Error("Rates change error");
      }
    } catch (e: unknown) {
      console.error((e as Error).message);
    }
  };

  return (
    <form className="form">
      <h2>Enter new rates</h2>
      {messageForAdmin && <p>{messageForAdmin}</p>}
      <label>for adults on weekdays:</label>
      <input value={adultsWeekday} onChange={(e) => setAdultsWeekday(e.target.value)} />
      <label>for children on weekdays:</label>
      <input value={childrenWeekday} onChange={(e) => setChildrenWeekday(e.target.value)} />
      <label>for adults on weekend:</label>
      <input value={adultsWeekend} onChange={(e) => setAdultsWeekend(e.target.value)} />
      <label>for children on weekend:</label>
      <input value={childrenWeekend} onChange={(e) => setChildrenWeekend(e.target.value)} />
      <button
        onClick={() =>
          handleEditRates()
        }
        // disabled={isButtonDisabled}
        type="submit"
      >
        Edit
      </button>
    </form>
  );
}
