import { useState } from "react";
import api from "../api";

function Signup() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordConfirm, setEnteredPasswordConfirm] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    if (enteredPassword !== enteredPasswordConfirm) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await api.post("/api/v1/users/signup", {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        passwordConfirm: enteredPasswordConfirm,
      });
      console.log("Signup success:", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="User name"
        value={enteredName}
        onChange={(e) => setEnteredName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={enteredEmail}
        onChange={(e) => setEnteredEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={enteredPasswordConfirm}
        onChange={(e) => setEnteredPasswordConfirm(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
