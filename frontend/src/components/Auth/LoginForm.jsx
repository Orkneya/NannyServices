import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import EyeOnIcon from "../../assets/icons/eye-on.svg";
import EyeOffIcon from "../../assets/icons/eye-off.svg";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import { loginSchema } from "../../schemas/authSchema.js";

import styles from "./Auth.module.css";

export default function LoginForm({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;

      await signInWithEmailAndPassword(auth, email, password);

      console.log("User logged in");
      onClose();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Log In</h2>
      <p className={styles.subtitle}>
        Welcome back! Please enter your credenials to access your account and
        continue your babbysitter search .
      </p>

      <div className={styles.fields}>
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <div className={styles.passwordField}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
          />

          <button
            type="button"
            className={styles.eyeBtn}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label="Toggle password visibility"
          >
            <img
              src={showPassword ? EyeOnIcon : EyeOffIcon}
              alt={showPassword ? "Hide password" : "Show password"}
            />
          </button>
        </div>
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button className={styles.submitBtn}>Login</button>
    </form>
  );
}
