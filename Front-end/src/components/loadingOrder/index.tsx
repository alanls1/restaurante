import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./index.scss";

const Index = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [mesa, setMesa] = useState(0);
  const [plate, setPlate] = useState([]);
  const [drink, setDrink] = useState([]);

  const initialMinutes = Math.floor(Math.random() * 3) + 1;

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  const [buttonActive, setButtonActive] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/loading/${id}`).then((res) => {
      const { orders } = res.data;

      setName(orders[0].nome);
      setMesa(orders[0].mesa);
      setPlate(JSON.parse(orders[0].prato_id));
      setDrink(JSON.parse(orders[0].bebida_id));
    });
  }, []);

  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdownInterval);
          setButtonActive(false);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div className="container-loading">
      <div className={`menu-selection`}>
        <h1>Mesa {mesa}</h1>
        <div className="table-name">
          <h2>Nome: {name}</h2>
        </div>
        <div className="plate-drinks">
          <div className="container-plate-itens">
            <h2>Cozinha</h2>
            <div className="container-itens">
              <ul>
                {plate.map(({ id, nome }: { id: number; nome: string }) => (
                  <li>{nome}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="container-plate-itens">
            <h2>Copa</h2>
            <div className="container-itens">
              <ul>
                {drink.map(({ id, nome }: { id: number; nome: string }) => (
                  <li>{nome}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p>
          Tempo estimado para entrega do pedido:{" "}
          {`0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
        </p>
        <button
          className="primary"
          onClick={() => handleClick()}
          disabled={buttonActive}
        >
          Pedido Entregue
        </button>
      </div>
    </div>
  );
};

export default Index;
