const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: ".env" });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/store", require("./routes/store"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} mode on port ${port}`
  );
});
