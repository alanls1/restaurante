import React, { useState } from "react";

import "./index.scss";
import { Props, Items } from "../../types";

const Index = ({ data, func, disabled }: Props) => {
  const [visible, setVisible] = useState("");
  const [placeholder, setPlaceholder] = useState<string | boolean>(false);
  const [date, setDate] = useState<Items[]>();

  const handleClickChoose = (items: Items) => {
    setPlaceholder(items.nome);
    setDate([items]);
  };

  const buttonClick = () => {
    if (date) {
      func(date);
    }
    setPlaceholder(false);
  };

  return (
    <div>
      <div
        className="plate-item"
        onClick={() => setVisible(visible === "active" ? "" : "active")}
      >
        {placeholder ? (
          <div className="choosed">
            {placeholder}
            <span onClick={() => setPlaceholder("")}></span>
          </div>
        ) : (
          "Selecione um Prato"
        )}
        <div className={`plate-itens ${visible}`}>
          {data?.map((item: Items) => (
            <div key={item.id} onClick={() => handleClickChoose(item)}>
              {item.nome}
            </div>
          ))}
        </div>
      </div>
      <button
        className="primary"
        onClick={() => buttonClick()}
        disabled={disabled}
      >
        Adicionar Prato
      </button>
    </div>
  );
};

export default Index;
