import { useForm } from "react-hook-form";
import { FormData } from "./update-profile.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { fetchLogin, fetchUserUpdate } from "@store/user-store";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";

interface Form {
  email?: string;
  name?: string;
}

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

  const inputForms = useMemo(
    () => ({
      name: {
        title: "Update Name",
        inputs: [
          {
            type: "text",
            name: "firstname",
            placeholder: "First Name",
            register,
            required: true,
            error: errors?.firstname?.message,
          },
          {
            type: "text",
            name: "lastname",
            placeholder: "Last Name",
            register,
            required: true,
            error: errors?.lastname?.message,
          },
          {
            type: "submit",
            value: "Save",
            className: "btn",
          },
        ],
        onSubmit: (data: FormData) => {
          const updateData = {
            firstname: data?.firstname,
            lastname: data?.lastname,
          };
          onSubmit(updateData);
        },
      },
      email: {
        title: "Update Email",
        inputs: [
          {
            type: "email",
            name: "email",
            placeholder: "Email",
            register,
            required: true,
            error: errors?.email?.message,
          },
          {
            type: "submit",
            value: "Save",
            className: "btn",
          },
        ],
        onSubmit: (data: FormData) => {
          const updateData = {
            email: data?.email,
          };
          onSubmit(updateData);
        },
      },
    }),
    []
  );

  const inputs = useMemo(() => inputForms[type as keyof typeof inputForms], []);

  const onSubmit = (updateData: FormData) => {
    dispatch(fetchUserUpdate(updateData));
    navigate("/settings");
  };

  return { inputs, handleSubmit };
};
