import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import { registerSchema } from "../../schemas/authSchema.js";

import styles from "./Auth.module.css";

export default function RegisterForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { email, password, name } = data;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      console.log("User registered:", userCredential.user);
      onClose();
    } catch (error) {
      console.error(error.message);
    }
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
      </div>

      <button className={styles.submitBtn}>Sign Up</button>
    </form>
  );
}
