import React, { useState } from "react";

import "./index.scss";
import Plates from "../plate";
import Drinks from "../drink";
import { Items } from "../../types";
import axios from "axios";

import gif from "../../assets/garcom.gif";

const Index = () => {
  const table = 1;
  const [input, setInput] = useState("");
  const [plate, setPlate] = useState<Items[]>();
  const [drink, setDrink] = useState<Items[]>();
  const [addAnimation, setAddAnimation] = useState("");
  const [addAnimationSucess, setAddAnimationsucess] = useState("");

  const getOrderPlate = (item: Items[]) => {
    setPlate(item);
  };

  const getOrderDrink = (item: Items[]) => {
    setDrink(item);
  };

  const getAllOrder = () => {
    const sendOrder = {
      table,
      name: input,
      plate,
      drink,
    };
    axios.post("http://localhost:3001/addItem", sendOrder);
    changePage();
  };
  const changePage = () => {
    setAddAnimation("active");
    setTimeout(() => {
      setAddAnimationsucess("active");
    }, 2000);
    setTimeout(() => {
      window.location.href = `/loading/${table}`;
    }, 2500);
  };

  return (
    <div className="container-menu">
      <div className={`menu-selection`}>
        <h1>Mesa 1</h1>
        <div className="table-name">
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            placeholder="nome"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="plate-drinks">
          <Plates funcPlate={getOrderPlate} />
          <Drinks funcDrink={getOrderDrink} />
        </div>
        <button
          className="primary"
          onClick={() => getAllOrder()}
          disabled={input === ""}
        >
          Gerar Pedido
        </button>
      </div>
      <div className={`loadingOrder ${addAnimation}`}>
        <img src={gif} alt="Garçom levando pedido" />
        <span className={`sucess ${addAnimationSucess}`}>
          Pedido Criado com Sucesso
        </span>
      </div>
    </div>
  );
};

export default Index;
