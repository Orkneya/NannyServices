import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Container from "../components/Container/Container.jsx";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
