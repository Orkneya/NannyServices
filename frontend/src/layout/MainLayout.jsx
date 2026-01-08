import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Container from "../components/Container/Container.jsx";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
