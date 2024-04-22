import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type User = {
  username: string;
  password: string;
};

const formValidateSchema = Yup.object().shape({
  username: Yup.string().email("Invalid email address").required("Email is required").trim(),
  // username: Yup.string().min(4).required("Username must be more than 3 letters").trim(),
  password: Yup.string().required("Password is required").trim(),
});

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    defaultValues: { username: "admin", password: "1234" },
    resolver: yupResolver(formValidateSchema),
  });

  return (
    <form onSubmit={handleSubmit((result) => alert(JSON.stringify(result)))}>
      <b>Login</b>
      <br />
      <Controller
        control={control}
        name="username"
        render={({ field }) => {
          return <TextField {...field} variant="filled" placeholder="Username" error={Boolean(errors.username)} helperText={errors.username?.message} />;
        }}
      />

      <br />
      <br />
      <Controller
        control={control}
        name="password"
        render={({ field }) => {
          return <TextField {...field} variant="filled" placeholder="Username" error={Boolean(errors.password)} helperText={errors.password?.message} />;
        }}
      />

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
