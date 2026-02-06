import React, { useEffect, useState } from "react";
import styles from "./Nannies.module.css";
import { nannies } from "../../mocks/nannies.js";
import NannyCard from "../../components/NannyCard/NannyCard.jsx";
import { useAuth } from "../../context/AuthContext";
import Modal from "../../components/Modal/Modal.jsx";
import LoginForm from "../../components/Auth/LoginForm.jsx";
import RegisterForm from "../../components/Auth/RegisterForm.jsx";
import AuthChoice from "../../components/AuthChoice/AuthChoice.jsx";
import { getUserFavorites, toggleFavorite } from "../../servises/favorites.js";
import FiltersDropdown from "../../components/FiltersDropdown/FiltersDropdown.jsx";

export default function Nannies() {
  const [filter, setFilter] = useState("A to Z");

  const { user } = useAuth();
  const STEP = 3;

  const [visibleCount, setViosibleCount] = useState(STEP);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("authChoice");
  const [favorites, setFavorites] = useState([]);

  const handleLoadMore = () => {
    setViosibleCount((prev) => prev + STEP);
  };

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    getUserFavorites(user.uid).then(setFavorites);
  }, [user]);

  const filteredNannies = [...nannies].sort((a, b) => {
    switch (filter) {
      case "A to Z":
        return a.name.localeCompare(b.name);

      case "Z to A":
        return b.name.localeCompare(a.name);

      case "Less than $10":
        return a.price_per_hour < 10 ? -1 : 1;

      case "Greater than $10":
        return a.price_per_hour > 10 ? -1 : 1;

      case "Popular":
        return b.rating - a.rating;

      case "No Popular":
        return a.rating - b.rating;

      case "Show all":
      default:
        return 0;
    }
  });

  const visibleNannies = filteredNannies.slice(0, visibleCount);

  return (
    <div>
      <FiltersDropdown value={filter} onChange={setFilter} />

      <div className={styles.nanny_card}>
        {visibleNannies.map((nanny, index) => (
          <NannyCard
            key={nanny.id}
            nanny={nanny}
            isFavorite={favorites.includes(nanny.id)}
            onToggleFavorite={async () => {
              if (!user) {
                setIsModalOpen(true);
                setModalType("authChoice");
                return;
              }

              const updated = await toggleFavorite(
                user.uid,
                nanny.id,
                favorites,
              );

              setFavorites(updated);
            }}
            user={user}
            onRequireAuth={() => {
              setIsModalOpen(true);
              setModalType("authChoice");
            }}
          />
        ))}
      </div>
      <div className={styles.btn_wrapper}>
        {visibleCount < filteredNannies.length && (
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
