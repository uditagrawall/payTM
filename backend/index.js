const express = require('express');
const cors = require('cors');

PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index.js");

app.use("/api/v1", mainRouter);


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})