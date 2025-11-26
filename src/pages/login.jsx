import { useState } from "react";
import api from "../api";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/api/v1/usersLogin", {
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log("Login success:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
