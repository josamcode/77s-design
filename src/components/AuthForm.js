import React from "react";
import { useForm } from "react-hook-form";

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && <span>This field is required</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
