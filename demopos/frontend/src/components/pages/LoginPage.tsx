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
        value={account.username}
        onChange={(e) => {
          console.log(e.target.value);
          account = { ...account, username: e.target.value };
        }}
      />

      <br />
      <input type="password" name="password" id="password" placeholder="Password" value={account.password} />

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
