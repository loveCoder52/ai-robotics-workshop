import React from "react";
import { ToastProvider } from "./context/ToastContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ToastProvider>
      {/* Sticky nav sits outside the page flow */}
      <Navbar />

      <main>
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <RegistrationForm />
      </main>

      <Footer />
    </ToastProvider>
  );
};

export default App;
