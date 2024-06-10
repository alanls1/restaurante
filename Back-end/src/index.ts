import express from "express";
import { getOrders, syncAndInsertData } from "./db";
import { getPlates, getDrinks } from "./db";

const app = express();
const port = 3001;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", async (req, res) => {
  const plates = await getPlates();
  const drinks = await getDrinks();

  res.send({ plates, drinks });
});

app.post("/addItem", async (req, res) => {
  syncAndInsertData(req.body);
});

app.get("/loading/:id/", async (req, res) => {
  const parametro = req.params.id;
  const id = +parametro;

  const orders = await getOrders(id);

  res.send({ orders });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
