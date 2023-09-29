const express = require("express");
const cors = require("cors");
const app = express();
const port = 3100;
const accountRouter = require("./routes/account");
const ingredientRouter = require("./routes/ingredient");

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/account", accountRouter);
app.use("/ingredient", ingredientRouter);



/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

