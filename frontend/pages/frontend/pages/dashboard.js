import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/balance`)
      .then(res => res.json())
      .then(data => setBalance(data.balance));

    fetch(`${API_URL}/transactions`)
      .then(res => res.json())
      .then(data => setTransactions(data.transactions));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Banking Dashboard</h1>

      <h2>Balance: ₹{balance}</h2>

      <h3>Transactions</h3>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            {tx.type} - ₹{tx.amount} ({tx.desc})
          </li>
        ))}
      </ul>
    </div>
  );
}
