import { Button } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

type User = {
  username: string;
  password: string;
};
export default function LoginPage() {
  const { control, handleSubmit, reset } = useForm<User>({ defaultValues: { username: "lek", password: "1234" } });

  return (
    <form
      onSubmit={handleSubmit((result) => {
        alert(JSON.stringify(result));
      })}
    >
      <b>Login</b>
      <br />
      <Controller control={control} name="username" render={({ field }) => <input type="text" placeholder="Username" {...field} />} />

      <br />
      <Controller control={control} name="password" render={({ field }) => <input type="text" placeholder="Password" {...field} />} />

      <br />

      <Button type="submit" fullWidth variant="contained">
        Login
      </Button>
      <br />
      <br />
      <Button type="button" fullWidth variant="text" onClick={() => reset()}>
        Clear
      </Button>
    </form>
  );
}
