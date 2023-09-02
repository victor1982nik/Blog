import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "./auth-form.css";
import { loginValidation, passwordValidation } from "./validation";

interface ISignInForm {
  login: string;
  password: string;
}

const AuthForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignInForm>();
  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className="auth-form">
      <Typography variant="h4" component="h4" className="auth">
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className="auth-form__subtitle"
      >
        Чтобы получить доступ
      </Typography>
      <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              label="login"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="password"
              type="password"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        ></Controller>

        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{ marginTop: 2 }}
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
