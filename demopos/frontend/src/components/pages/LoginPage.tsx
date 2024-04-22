import { Button } from "@mui/material";
import React from "react";

type User = {
  username: string;
  password: string;
};
export default function LoginPage() {
  return (
    <form>
      <b>Login</b>
      <br />
      <input type="text" name="username" id="username" placeholder="Username" onChange={(e) => {}} />

      <br />
      <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => {}} />

      <br />

      <Button type="submit" fullWidth variant="contained">
        Login
      </Button>
      <br />
      <br />
      <Button type="button" fullWidth variant="text">
        Clear
      </Button>
    </form>
  );
}
