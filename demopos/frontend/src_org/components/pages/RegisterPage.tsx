import loginBg from "@/assets/images/bg4.jpg";
import { authSelector, register } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/store/store";
import { User } from "@/types/user.type";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Icons from "@mui/icons-material/";
import { Alert, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const formValidateSchema = Yup.object().shape({
  // username: Yup.string().required("Email is required").trim(),
  username: Yup.string().test("username", () => {
    (_value: string) => {
      return _value != "admin" ? true : "Errror 555";
    };
  }),
  password: Yup.string().required("Password is required").trim(),
});

const Register = () => {
  const dispatch = useAppDispatch();
  const authReducer = useSelector(authSelector);
  const navigate = useNavigate();

  const onSubmit = async (values: User) => {
    const result = await dispatch(register(values));
    if (register.fulfilled.match(result)) {
      navigate("/login");
    }
  };

  const initialValue: User = { username: "", password: "" };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValue,
    // @ts-ignore
    resolver: yupResolver(formValidateSchema),
  });

  const showForm = () => {
    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={Boolean(errors.username?.message)}
              helperText={errors.username?.message?.toString()}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Email />
                  </InputAdornment>
                ),
              }}
              label="Username"
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
              {...field}
              helperText={errors.password?.message}
              error={Boolean(errors.password?.message?.toString())}
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

        {authReducer.isError && <Alert severity="error">Register failed</Alert>}
        <Button className="mt-8" type="submit" fullWidth variant="contained" color="primary">
          Create
        </Button>
        <Button className="mt-4" onClick={() => navigate(-1)} type="button" fullWidth variant="outlined">
          Cancel
        </Button>
      </form>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px]">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Register
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

export default Register;