import React, { useState } from "react";
import styles from "./Nannies.module.css";
import { nannies } from "../../mocks/nannies.js";
import NannyCard from "../../components/NannyCard/NannyCard.jsx";
import { useAuth } from "../../context/AuthContext";
import Modal from "../../components/Modal/Modal.jsx";
import LoginForm from "../../components/Auth/LoginForm.jsx";
import RegisterForm from "../../components/Auth/RegisterForm.jsx";
import AuthChoice from "../../components/AuthChoice/AuthChoice.jsx";

export default function Nannies() {
  const { user } = useAuth();
  const STEP = 3;

  const [visibleCount, setViosibleCount] = useState(STEP);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("authChoice");

  const visibleNannies = nannies.slice(0, visibleCount);

  const handleLoadMore = () => {
    setViosibleCount((prev) => prev + STEP);
  };

  return (
    <div>
      {visibleNannies.map((nanny, index) => (
        <NannyCard
          key={nanny.id}
          nanny={nanny}
          user={user}
          onRequireAuth={() => {
            setIsModalOpen(true);
            setModalType("authChoice");
          }}
        />
      ))}
      <div className={styles.btn_wrapper}>
        {visibleCount < nannies.length && (
          <button className={styles.btn_load} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {modalType === "authChoice" && (
            <AuthChoice
              onLogin={() => setModalType("login")}
              onRegister={() => setModalType("register")}
            />
          )}

          {modalType === "login" && (
            <LoginForm onClose={() => setIsModalOpen(false)} />
          )}

          {modalType === "register" && (
            <RegisterForm onClose={() => setIsModalOpen(false)} />
          )}
        </Modal>
      )}
    </div>
  );
}
