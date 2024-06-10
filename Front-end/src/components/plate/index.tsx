import React, { useEffect, useState } from "react";
import axios from "axios";

import SkeletonItem from "../skeleton-item";

import { Items, DataType, Plate } from "../../types";

const Index = ({ funcPlate }: Plate) => {
  const [data, setData] = useState<DataType>();

  const [getData, setGetData] = useState<Items[]>([]);

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => setData(res.data));
  }, []);

  const handleClickDate = (childrenData: Items[]) => {
    setGetData([...getData, ...childrenData]);
    if (getData.length > 3) {
      setDisabled(true);
    }
  };

  useEffect(() => {
    funcPlate(getData);
  }, [getData, funcPlate]);

  return (
    <div className="container-plate-itens">
      <h2>Pratos</h2>
      <SkeletonItem
        data={data?.plates}
        func={handleClickDate}
        disabled={disabled}
      />
      <ul className="container-itens">
        {getData.map((item) => (
          <li>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
