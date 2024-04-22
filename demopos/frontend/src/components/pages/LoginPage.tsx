import loginBg from "../../assets/react.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Icons from "@mui/icons-material/";
import { Box, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { User } from "../../types/user.type";

const formValidateSchema = Yup.object().shape({
  // username: Yup.string().email("Invalid email address").required("Email is required").trim(),
  username: Yup.string().min(4).required("Username must be more than 3 letters").trim(),
  password: Yup.string().required("Password is required").trim(),
});

const Login = () => {
  const navigate = useNavigate();

  const classes: any = {
    root: { display: "flex", justifyContent: "center", alignItems: "center" },
    submitBtn: { marginTop: 4 },
    canelBtn: { marginTop: 2 },
  };

  const initialValue: User = { username: "admin", password: "1234" };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const onSubmit = async (values: User) => {
    alert(JSON.stringify(values));
  };

  const showForm = () => {
    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              error={Boolean(errors.username?.message)}
              helperText={errors.username?.message}
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Email />
                  </InputAdornment>
                ),
              }}
              autoComplete="email"
              autoFocus
            />
          )}
        ></Controller>

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              helperText={errors.password?.message}
              error={Boolean(errors.password?.message)}
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Password />
                  </InputAdornment>
                ),
              }}
              label="Password"
              type="password"
            />
          )}
        ></Controller>

        <Button sx={classes.submitBtn} type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>

        <Button
          onClick={() => {
            navigate("/register");
          }}
          type="button"
          fullWidth
          variant="outlined"
          className="border-dashed border-1 border-gray-300 mt-4"
          color="primary"
        >
          Register
        </Button>
      </form>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px]">
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
      <style>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url(${loginBg});
            text-align: center;
          }
        `}
      </style>
    </Box>
  );
};

export default Login;
