import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../../schemas/authSchema.js";

import styles from "./Auth.module.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login data:", data);
    // тут позже будет Firebase login
  };
  return (
    <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Log In</h2>
      <p className={styles.subtitle}>
        Welcome back! Please enter your credenials to access your account and
        continue your babbysitter search .
      </p>

      <div className={styles.fields}>
        {/* <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" /> */}
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button className={styles.submitBtn}>Login</button>
    </form>
  );
}
