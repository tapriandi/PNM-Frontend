import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            placeholder="username"
            {...register("username", { required: true, maxLength: 20 })}
            className="input input-bordered w-full max-w-xs"
          />
          {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div> */}
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true, maxLength: 20 })}
            className="input input-bordered w-full max-w-xs"
          />
          {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div> */}
        </label>

        <button type="submit" className="mt-10 w-full btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
