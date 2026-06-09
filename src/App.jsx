import { Navigate, Route, Routes } from "react-router-dom";
import BackToTop from "./components/layout/BackToTop";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import LanguageSwitcher from "./components/layout/LanguageSwitcher";
import ScrollToTop from "./components/layout/ScrollToTop";
import WhatsAppFloatingButton from "./components/layout/WhatsAppFloatingButton";
import ComponentsPage from "./pages/ComponentsPage";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <SiteHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/privacidad" element={<LegalPage doc="privacy" />} />
        <Route path="/terminos" element={<LegalPage doc="terms" />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <SiteFooter />
      <WhatsAppFloatingButton />
      <BackToTop />
      <LanguageSwitcher />
    </>
  );
}

export default App;
