import { Button } from "@mui/material";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <b>Login</b>
      <br />
      <input type="text" name="username" id="username" placeholder="Username" />

      <br />
      <input type="text" name="password" id="password" placeholder="Password" />

      <br />

      <Button fullWidth variant="contained">
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
