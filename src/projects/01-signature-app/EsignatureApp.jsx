import React, { useState } from "react";
import Title from "./components/Title";
export default function EsignatureApp() {
  const [name, setName] = useState("sign");
  const [date, setDate] = useState("date");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.35rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "DoB" : date} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil
        tenetur est, hic asperiores commodi perferendis quis unde exercitationem
        corrupti officiis quasi nostrum accusamus ad quidem accusantium laborum
        alias. Asperiores!
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "30vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
