import { Button } from "@mui/material";
import React from "react";

type User = {
  username: string;
  password: string;
};
export default function LoginPage() {
  let account: User = { username: "admin", password: "1234" };
  return (
    <div>
      <b>Login</b>
      <br />
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        onChange={(e) => {
          account = { ...account, username: e.target.value };
        }}
      />

      <br />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={(e) => {
          account = { ...account, password: e.target.value };
        }}
      />

      <br />

      <Button fullWidth variant="contained" onClick={() => alert(JSON.stringify(account))}>
        Login
      </Button>
      <br />
      <br />
      <Button fullWidth variant="text">
        Clear
      </Button>
    </div>
  );
}
