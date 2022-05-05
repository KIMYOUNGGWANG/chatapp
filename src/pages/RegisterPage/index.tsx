import React, { useRef, useState } from "react";
import { User } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import md5 from "md5";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
type Inputs = {
  [x: string]: string;
};

interface NetworkErr<T = any> {
  status: number;
  message: null | string;
  data?: TemplateStringsArray;
}
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitErr, setSubmitErr] = useState("");
  const password = useRef();
  password.current = watch("password");
  const submit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const auth = getAuth();
      let createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(auth.currentUser);
      // await updateProfile(auth.currentUser, {
      //   displayName: data.name,
      //   photoURL: `http://gravatar.com/avatar/${md5(
      //     createdUser.user.email
      //   )}?d=identicon`,
      // });

      setLoading(false);
      console.log(createdUser);
    } catch (error) {
      const err = error as NetworkErr;
      setLoading(false);

      throw err;
    }
  };

  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>This email field is required</p>
        )}
        <label>name</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && errors.name.type === "required" && (
          <p>This name field is required</p>
        )}

        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>This password field is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>Password must have at lest 6 characters</p>
        )}
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
        {errors.passwordConfirm &&
          errors.passwordConfirm.type === "validate" && (
            <p>The passwords do not match</p>
          )}
        <input type="submit" disabled={loading} />
        <Link style={{ color: "grey", textDecoration: "none" }} to="/login">
          이미 아이디가 있다면...
        </Link>
      </form>
    </div>
  );
};

export default Register;
