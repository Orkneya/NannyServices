import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../../schemas/authSchema.js";

import styles from "./Auth.module.css";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Register data:", data);
    // тут позже будет Firebase registr
  };
  return (
    <form className={styles.register} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Registration</h2>
      <p className={styles.subtitle}>
        Thank you for your interest in our platform! In order to register, we
        need some information.Please provide us with the followihg information
      </p>

      <div className={styles.fields}>
        <input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

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
        {/* <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" /> */}
      </div>

      <button className={styles.submitBtn}>Sign Up</button>
    </form>
  );
}
