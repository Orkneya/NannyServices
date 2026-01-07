import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";

import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Header() {
  const [authType, setAuthType] = useState(null);

  const { user } = useAuth();

  const closeModal = () => setAuthType(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    }
  };

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
              {user ? (
                <>
                  <span className={styles.authBtn}>
                    {user.displayName || user.email}
                  </span>
                  <button className={styles.authBtn} onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </Container>
      </header>
      <Modal isOpen={authType !== null} onClose={closeModal}>
        {authType === "login" && <LoginForm onClose={closeModal} />}
        {authType === "register" && <RegisterForm onClose={closeModal} />}
      </Modal>
    </>
  );
}
