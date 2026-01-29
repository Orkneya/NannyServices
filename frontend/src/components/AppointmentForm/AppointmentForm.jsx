import { useForm } from "react-hook-form";
// import styles from "./AppointmentForm.module.css";
import styles from "../Auth/Auth.module.css";
import style from "../NannyCard/NannyCard.module.css";

export default function AppointmentForm({ nanny }) {
  // export default function AppointmentForm({ onClose }) {
  // const [showPassword, setShowPassword] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(loginSchema),
  // });
  // const onSubmit = async (data) => {
  //   try {
  //     const { email, password } = data;

  //     await signInWithEmailAndPassword(auth, email, password);

  //     console.log("User logged in");
  //     onClose();
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    // <form className={styles.appointmentForm} onSubmit={handleSubmit(onSubmit)}>
    <form className={styles.appointment}>
      <h2 className={styles.title}>
        Make an appointment <br /> with a babysitter
      </h2>
      <p className={styles.subtitle}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>

      <div className={style.card}>
        <div className={style.avatar}>
          <img src={nanny.avatar_url} alt={nanny.name} />
        </div>

        <div className={style.info}>
          <p className={style.nanny}>Your nanny</p>
          <h3 className={style.name}>{nanny.name}</h3>
        </div>
      </div>

      {/* 
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
      </div> */}

      <button className={styles.submitBtn}>Send</button>
    </form>
  );
}
