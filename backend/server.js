import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const user = { name: "Rahul" };
const balance = 12500;

const transactions = [
  { id: 1, type: "debit", amount: 500, desc: "Groceries" },
  { id: 2, type: "credit", amount: 2000, desc: "Salary" }
];

app.post("/login", (req, res) => {
  res.json({ success: true, user });
});

app.get("/balance", (req, res) => {
  res.json({ balance });
});

app.get("/transactions", (req, res) => {
  res.json({ transactions });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));
