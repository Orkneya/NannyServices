import styles from "./Auth.module.css";

export default function RegisterForm() {
  return (
    <div className={styles.register}>
      <h2 className={styles.title}>Registration</h2>
      <p className={styles.subtitle}>
        Thank you for registration! Please fill in the fields below.
      </p>

      <div className={styles.fields}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>

      <button className={styles.submitBtn}>Sign Up</button>
    </div>
  );
}
