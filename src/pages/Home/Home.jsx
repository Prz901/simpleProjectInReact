import React, { useState } from "react";

export default function Home() {
  const [colorText, setColorText] = useState([]);

  const Abaco = ({ text, color }) => {
    const title = {
      color: color,
      text: text,
    };
    console.log("title text", title.color);

    return (
      <>
        <h1 style={{ color: title.color }}>{title.text}</h1>
      </>
    );
  };

  const getColor = () => {
    const i = Math.floor(Math.random() * 5);

    const colors = ["#0d0f16", "#053C78", "#1BC8FC", "#D72483", "#FD3E81"];
    return colors[i];
  };

  function handleTextInput(event) {
    const text = event.split(" ");
    console.log(text);
    if (text.length > 0) {
      text.forEach((element) => {
        console.log("element", element);
        setColorText(element);
      });
    }
  }

  return (
    <div>
      <div>
        <div>
          <Abaco text={"qualquercoisa legal que aparece"} color={getColor()} />
        </div>
        <div>
          <p>Um paragrafo Legal para fazer um teste</p>
          <p>Outro paragrafo legal para fazer outro teste</p>
        </div>
        <div>
          <label>Enter value : </label>
          <input
            type="textarea"
            name="textValue"
            onChange={(e) => handleTextInput(e.target.value)}
          />
        </div>
        <p>{colorText}</p>
      </div>
    </div>
  );
}
