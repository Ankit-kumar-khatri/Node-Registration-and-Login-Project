// ------------All Js part here ------------

require("./src/Connection/connection");
const express = require("express");
const app = express();
const Router = require("./src/Routers/routers");
const port = process.env.port || 8000;

app.use(express.json());
app.use(Router);






// -----------Server Listening-------------

app.listen(port, () => {
  console.log(`Server Listening on port no - ${port}`);
});