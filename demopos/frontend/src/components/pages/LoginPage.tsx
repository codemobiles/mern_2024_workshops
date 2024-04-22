import { Button } from "@mui/material";
import React from "react";

type User = {
  username: string;
  password: string;
};
export default function LoginPage() {
  const account: User = { username: "admin", password: "1234" };
  return (
    <div>
      <b>Login</b>
      <br />
      <input type="text" name="username" id="username" placeholder="Username" />

      <br />
      <input type="text" name="password" id="password" placeholder="Password" />

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
