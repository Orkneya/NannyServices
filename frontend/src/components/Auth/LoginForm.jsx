import styles from "./Auth.module.css";

export default function LoginForm() {
  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Login</h2>
      <p className={styles.subtitle}>
        Welcome back! Please enter your details.
      </p>

      <div className={styles.fields}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>

      <button className={styles.submitBtn}>Login</button>
    </div>
  );
}
