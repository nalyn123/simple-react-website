import { useForm } from "react-hook-form";
import { FormData } from "./update-profile.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { fetchLogin, fetchUserUpdate } from "@store/user-store";
import { useNavigate, useParams } from "react-router-dom";

export const useUpdateProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // const { auth } = useSelector((state: RootState) => state.user);
  const { type } = useParams<{ type: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const inputs = {
    input: {
      type: type === "email" ? "email" : "text",
      name: type,
      placeholder: type,
      register,
      required: true,
      error: type ? errors?.[type]?.message : "",
    },
    submit: {
      type: "submit",
      value: "Update",
      className: "btn",
    },
  };

  const onSubmit = (data: FormData) => {
    const updateData = {
      type,
      value: type ? data?.[type] : "",
    };
    dispatch(fetchUserUpdate(updateData));
    navigate("/settings");
  };

  return { inputs, handleSubmit, onSubmit };
};
