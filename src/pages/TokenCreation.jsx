import React, { useState } from "react";
import { TonConnect } from "@tonconnect/ui-react";
import axios from "axios";

const TokenCreation = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreateToken = async () => {
    try {
      // TonConnect orqali wallet bilan bog'lanish
      const tonConnect = new TonConnect();
      await tonConnect.connect();

      // Transaction sozlash
      const transaction = {
        to: "UQBYakxYFJY7sl771wYZNiN2kW8BxptvBeRBMCl20yjVghdX", // Sizning adresingiz
        amount: 3, // 3 TON
        message: `Creating token: ${name}`,
      };

      // Transaction yuborish
      await tonConnect.sendTransaction(transaction);

      // Token yaratish uchun backendga so'rov yuborish
      const response = await axios.post("/create-token", {
        address: "YOUR_ADDRESS_HERE",
        amount: 3,
        tokenName: name,
      });

      setSuccess("Token created successfully!");
      setError("");
    } catch (err) {
      setError("Error creating token. Please try again.");
      console.log(err);

      setSuccess("");
    }
  };

  return (
    <div>
      <h1>Create Your Token</h1>
      <input
        type="text"
        placeholder="Token Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreateToken}>Create Token</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default TokenCreation;
