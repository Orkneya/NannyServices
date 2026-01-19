import styles from "./AuthChoice.module.css";

export default function AuthChoice({ onLogin, onRegister }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Sign in to continue</h2>

      <p className={styles.text}>
        Only registered users can add nannies to favorites. Please sign in or
        create an account.
      </p>

      <div className={styles.actions}>
        <button type="button" className={styles.loginBtn} onClick={onLogin}>
          LogIn
        </button>

        <button
          type="button"
          className={styles.registerBtn}
          onClick={onRegister}
        >
          Registration
        </button>
      </div>
    </div>
  );
}
