import React from "react";
import { useForm } from "react-hook-form";

function CreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          {...register("firstName", {
            required: true,
            minLength: { value: 5, message: "at least 5 character" },
            maxLength: { value: 7, message: "at most 7 character" },
          })}
          className="border-black border-2 p-1"
        />
        {errors.firstName && (
          <p className="text-red-600">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          {...register("lastName", {
            required: true,
            maxLength: {
              value: 10,
              message: "at most  10 chaarcter in last name",
            },
          })}
          className="border-black border-2 p-1"
        />

        {errors.lastName && (
          <p className="text-red-600">{errors.lastName.message}</p>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          className="border-black border-2 p-1"
        />
        {errors?.email?.type === "pattern" && (
          <p className="text-red-600">{errors.email.message}</p>
        )}
      </div>

      <input type="submit" className="border-black border-2 p-1" />
    </form>
  );
}

export default CreateForm;
