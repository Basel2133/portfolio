import React from "react";

function UserLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserLogin form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="pswd" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default UserLogin;
