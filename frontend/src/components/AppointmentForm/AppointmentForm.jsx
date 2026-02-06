import { useForm } from "react-hook-form";
import styles from "./AppointmentForm.module.css";
import style from "../Auth/Auth.module.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { appointmentSchema } from "../../schemas/appointmentSchema";

export default function AppointmentForm({ nanny, onSuccess }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });

  const timeValue = watch("time");

  const onSubmit = (data) => {
    console.log(data);
    // здесь отправка на сервер

    reset();
    onSuccess();
  };
  return (
    <div className={style.appointment}>
      <h2 className={style.title}>
        Make an appointment <br /> with a babysitter
      </h2>
      <p className={style.subtitle}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>

      <div className={styles.card}>
        <div className={styles.avatar}>
          <img src={nanny.avatar_url} alt={nanny.name} />
        </div>

        <div className={style.info}>
          <p className={styles.nanny}>Your nanny</p>
          <h3 className={styles.name}>{nanny.name}</h3>
        </div>
      </div>

      <form
        className={styles.appointmentForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.fieldsContainer}>
          <div className={styles.row}>
            <div className={styles.field}>
              <input
                type="text"
                placeholder="Address"
                {...register("address")}
              />
              {errors.address && (
                <p className={styles.error}>{errors.address.message}</p>
              )}
            </div>

            <div className={styles.field}>
              <input
                type="text"
                placeholder="+380XXXXXXXXX"
                {...register("phone")}
              />
              {errors.phone && (
                <p className={styles.error}>{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <input
                type="number"
                placeholder="Child`s age"
                {...register("child_age")}
              />
              {errors.child_age && (
                <p className={styles.error}>{errors.child_age.message}</p>
              )}
            </div>

            <div className={styles.field}>
              <div className={`${styles.field} ${styles.timeField}`}>
                <input type="time" {...register("time")} />
                {!timeValue && (
                  <span className={styles.fakePlaceholder}>Meeting time</span>
                )}
              </div>

              {/* <div className={styles.field}>
                <label className={styles.label}>Time</label>
                <input type="time" {...register("time")} />
              </div> */}
              {errors.time && (
                <p className={styles.error}>{errors.time.message}</p>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <input
              type="text"
              placeholder="Father's or mother's name"
              {...register("parentsName")}
            />
            {errors.parentsName && (
              <p className={styles.error}>{errors.parentsName.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <textarea
              className={styles.commentArea}
              placeholder="Comment"
              {...register("comment")}
            />
            {errors.comment && (
              <p className={styles.error}>{errors.comment.message}</p>
            )}
          </div>
        </div>

        <button className={style.submitBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
