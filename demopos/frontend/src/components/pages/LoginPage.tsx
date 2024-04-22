import { Button } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

type User = {
  username: string;
  password: string;
};
export default function LoginPage() {
  const { control, handleSubmit } = useForm<User>({
    defaultValues: { username: "", password: "" },
  });

  return (
    <form onSubmit={handleSubmit((result) => alert(JSON.stringify(result)))}>
      <b>Login</b>
      <br />
      <Controller
        control={control}
        name="username"
        render={({ field }) => {
          return <input type="text" {...field} placeholder="Username" />;
        }}
      />

      <br />
      <Controller
        control={control}
        name="password"
        render={({ field }) => {
          return <input type="text" {...field} placeholder="Password" />;
        }}
      />

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
