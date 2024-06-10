import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sistemaderestaurante", "root", "4123", {
  host: "localhost",
  dialect: "mysql",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export const getPlates = async () => {
  try {
    const [rows] = await sequelize.query("SELECT * FROM prato");
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const getDrinks = async () => {
  try {
    const [rows] = await sequelize.query("SELECT * FROM bebida");
    return rows;
  } catch (error) {
    console.log(error);
  }
};
export const getOrders = async (id: number) => {
  try {
    const [rows] = await sequelize.query(
      "SELECT * FROM pedido WHERE mesa = :id",
      {
        replacements: { id: id },
      }
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export async function syncAndInsertData(obj: {
  name: string;
  table: number;
  plate: object;
  drink: object;
}) {
  try {
    await sequelize.sync({ force: true });
    const {
      name,
      table,
      plate,
      drink,
    }: {
      name: string;
      table: number;
      plate: object;
      drink: object;
    } = obj;

    await sequelize.query(
      "INSERT INTO pedido (nome, mesa, prato_id, bebida_id) VALUES (:name, :mesa, :plate, :drink)",
      {
        replacements: {
          name,
          mesa: table,
          plate: JSON.stringify(plate),
          drink: JSON.stringify(drink),
        },
      }
    );

    console.log("Data inserted.");
  } catch (error) {
    console.error("Error synchronizing database or inserting data:", error);
  }
}
