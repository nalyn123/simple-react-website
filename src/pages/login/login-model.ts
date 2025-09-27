import { useForm } from "react-hook-form";
import { FormData } from "./login.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { fetchLogin } from "@store/user-store";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const inputs = {
    email: {
      type: "email",
      name: "email",
      placeholder: "Email",
      register,
      required: true,
      error: errors?.email?.message,
    },
    password: {
      type: "password",
      name: "password",
      placeholder: "Password",
      register,
      required: true,
      error: errors?.password?.message,
    },
    submit: {
      type: "submit",
      value: "Login",
      className: "btn",
    },
  };

  const onSubmit = (data: FormData) => {
    dispatch(fetchLogin(data));
    navigate("/");
  };

  return { inputs, handleSubmit, onSubmit };
};
