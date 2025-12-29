import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";

export default function Header() {
  const [authType, setAuthType] = useState(null);

  const closeModal = () => setAuthType(null);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <span className={styles.logoPrimary}>Nani</span>
              <span className={styles.logoSecondary}>Services</span>
            </div>

            <nav className={styles.nav}>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
              <NavLink to="/nannies" className={styles.link}>
                Nannies
              </NavLink>
            </nav>

            <div className={styles.auth}>
              <button
                className={styles.authBtn}
                onClick={() => setAuthType("login")}
              >
                Login
              </button>

              <button
                className={styles.authBtn}
                onClick={() => setAuthType("register")}
              >
                Registration
              </button>
            </div>
          </div>
        </Container>
      </header>
      <Modal isOpen={authType !== null} onClose={closeModal}>
        {authType === "login" && <LoginForm />}
        {authType === "register" && <RegisterForm />}
      </Modal>
    </>
  );
}
