import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import { LanguageProvider } from "contexts/LanguageContext";
import NotFound from "pages/NotFound";
import HomeLanding from "./pages/home-landing";
import ContactAndFeedback from "./pages/contact-and-feedback";
import BreedIdentificationDemo from "./pages/breed-identification-demo";
import SupportedBreedsGallery from "./pages/supported-breeds-gallery";

const Routes = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ErrorBoundary>
          <ScrollToTop />
          <RouterRoutes>
            {/* Define your route here */}
            <Route path="/" element={<HomeLanding />} />
            <Route path="/home-landing" element={<HomeLanding />} />
            <Route
              path="/contact-and-feedback"
              element={<ContactAndFeedback />}
            />
            <Route
              path="/breed-identification-demo"
              element={<BreedIdentificationDemo />}
            />
            <Route
              path="/supported-breeds-gallery"
              element={<SupportedBreedsGallery />}
            />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </ErrorBoundary>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default Routes;
