import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
type Inputs = {
  [x: string]: string;
};
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef();
  password.current = watch("password");
  const submit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <label>name</label>
        <input type="text" {...register("name", { required: true })} />
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        <label>Password Confirm</label>
        <input
          type="password"
          {...register("passwordConfirm", {
            required: true,
            minLength: 6,
            pattern: /^[A-Z(1)a-z(1)0-9(1)]/,
            validate: (value) => value === password.current,
          })}
        />
        <input type="submit" />
        <Link style={{ color: "grey", textDecoration: "none" }} to="/login">
          이미 아이디가 있다면...
        </Link>
      </form>
    </div>
  );
};

export default Register;
