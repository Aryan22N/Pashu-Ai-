import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import Icon from "../AppIcon";
import Button from "./Button";

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-caption text-sm px-3 py-1.5 hover:bg-muted transition-gentle"
      aria-label={`Switch to ${language === "en" ? "Hindi" : "English"}`}
    >
      {t("language")}
    </Button>
  );
};

const Logo = () => {
  return (
    <Link
      to="/home-landing"
      className="flex items-center space-x-3 transition-gentle hover:opacity-80"
    >
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-gentle-sm">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-foreground"
        >
          <path
            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7C1 6.4 1.4 6 2 6L10 6.5C10.6 6.5 11 6.9 11 7.5V9C11 9.6 11.4 10 12 10S13 9.6 13 9V7.5C13 6.9 13.4 6.5 14 6.5L22 6C22.6 6 23 6.4 23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9ZM12 13C8.7 13 6 15.7 6 19V21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V19C18 15.7 15.3 13 12 13Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="hidden sm:block">
        <h1 className="font-heading font-semibold text-lg text-foreground leading-tight">
          Pashu Ai
        </h1>
        <p className="font-caption text-xs text-muted-foreground -mt-0.5">
          Recognition
        </p>
      </div>
    </Link>
  );
};

const NavigationProgress = ({ currentPath }) => {
  const paths = [
    "/home-landing",
    "/breed-identification-demo",
    "/supported-breeds-gallery",
    "/contact-and-feedback",
  ];
  const currentIndex = paths?.indexOf(currentPath);

  if (currentIndex === -1) return null;

  return (
    <div className="hidden lg:flex items-center space-x-1 ml-8">
      {paths?.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-gentle ${
            index <= currentIndex ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigationItems = [
    { path: "/home-landing", label: t("home"), icon: "Home" },
    {
      path: "/breed-identification-demo",
      label: t("identifyBreed"),
      icon: "Camera",
    },
    {
      path: "/supported-breeds-gallery",
      label: t("browseBreeds"),
      icon: "Grid3X3",
    },
    {
      path: "/contact-and-feedback",
      label: t("contact"),
      icon: "MessageCircle",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-4 lg:mx-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Navigation Progress Indicator */}
          <NavigationProgress currentPath={location?.pathname} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems?.map((item) => {
              const isActive = location?.pathname === item?.path;
              return (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`relative px-4 py-2 rounded-lg font-body font-medium text-sm transition-gentle hover:bg-muted ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item?.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden p-2"
              aria-label={isMobileMenuOpen ? t("close") : t("menu")}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-gentle-lg">
          <nav className="px-4 py-4 space-y-2">
            {navigationItems?.map((item) => {
              const isActive = location?.pathname === item?.path;
              return (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-body font-medium transition-gentle ${
                    isActive
                      ? "text-primary bg-primary/5 border border-primary/20"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
const LanguageProvider = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.warn("Placeholder: LanguageProvider is not implemented yet.");
  }, []);
  return <div>{/* LanguageProvider placeholder */}</div>;
};

export { LanguageProvider };
export { useLanguage };
