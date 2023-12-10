const express = require("express");
const cors = require("cors");
const app = express();
const port = 3100;

const customerRouter = require("./routes/customer");
const employeeRouter = require("./routes/employee");
const employeeTypeRouter = require("./routes/employeeType");
const ingredientRouter = require("./routes/ingredient");
const item_ingredientRouter = require("./routes/item_ingredient");
const menu_itemRouter = require("./routes/menu_item");
const order_itemRouter = require("./routes/order_item");
const ordersRouter = require("./routes/orders");
const payment_methodsRouter = require("./routes/payment_methods");
const reservationRouter = require("./routes/reservation");
const restaurant_tableRouter = require("./routes/restaurant_table");
const time_logRouter = require("./routes/time_log");
const transaction_itemRouter = require("./routes/transaction_item");
const transactionRouter = require("./routes/transaction");
const customRouter = require("./routes/custom");

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

app.use("/customer", customerRouter);
app.use("/employee", employeeRouter);
app.use("/employee_type", employeeTypeRouter);
app.use("/ingredient", ingredientRouter);
app.use("/item_ingredient", item_ingredientRouter);
app.use("/menu_item", menu_itemRouter);
app.use("/order_item", order_itemRouter);
app.use("/orders", ordersRouter);
app.use("/payment_methods", payment_methodsRouter);
app.use("/reservation", reservationRouter);
app.use("/restaurant_table", restaurant_tableRouter);
app.use("/time_log", time_logRouter);
app.use("/transaction_item", transaction_itemRouter);
app.use("/transaction", transactionRouter);
app.use("/custom", customRouter);



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

