const morgan = require("morgan");
const bd = require("./bd");
const jwts = require("./bd/jwt");

const express = require("express");
const app = express();
var cors = require("cors");
// const { Cotizaciones } = require("../src/components/calculadora/Cotizaciones");
// const port = 3200;

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de As del Sur");
});

app.use(express.json());
app.use(cors());

jwts(app, bd);

const PORT = process.env.PORT || 5000;

app.listen(PORT)
console.log(`http://localhost:${PORT}`);
// app.listen(port, () => {
//   console.log(`Backend-As_Del_Sur corriendo en http://localhost:${port}`);
// });


