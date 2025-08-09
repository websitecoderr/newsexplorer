import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import SavedArticles from "../SavedArticles/SavedArticles.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { register, login, checkToken, logout } from "../../utils/auth.mock";
import { getSavedArticles } from "../../utils/savedarticles.mock";
import { fetchNewsArticles } from "../../utils/newsApi.js";
import { useLocation } from "react-router-dom";
import SuccessModal from "../SuccessModal/SuccessModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState("Elisa");
  const [articles, setArticles] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const isSavedArticlesPage = location.pathname === "/saved-articles";

  const [registerError, setRegisterError] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    checkToken()
      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData.name);
        setSavedArticles(getSavedArticles());
        console.log("Token validated, user logged in:", userData);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log("Token validation failed:", err.message);
      });
  }, []);

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    return login({ email, password })
      .then((response) => {
        setIsLoggedIn(true);
        setCurrentUser(response.user.name);
        setSavedArticles(getSavedArticles());
        setLoginError("");
        setIsLoginOpen(false);
        console.log("Login successful:", response.user);
      })
      .catch((err) => {
        setLoginError(err.message || "Login failed");
        console.log("Login error:", err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogout = () => {
    setIsLoading(true);
    logout()
      .then(() => {
        setIsLoggedIn(false);
        setSavedArticles([]);
        setCurrentUser(null);

        console.log("Logout successful");
      })
      .finally(() => setIsLoading(false));
  };
  const handleRegister = ({ email, password, name }) => {
    setIsLoading(true);
    return register({ email, password, name })
      .then((response) => {
        setCurrentUser(response.user.name);
        setIsLoggedIn(true);
        setRegisterError("");
        setRegisterModalOpen(false);
        setSuccessModalOpen(true);
        console.log("Registration successful:", response.user);
      })
      .catch((err) => {
        setRegisterError(err.message || "Registration failed");
        console.log("Registration error:", err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError("Please enter a keyword");
      setArticles([]);
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const articlesData = await fetchNewsArticles(query);
      if (articlesData.length === 0) {
        setError("Nothing Found");
      } else {
        setArticles(articlesData);
        setVisibleCards(3);
      }
    } catch (err) {
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setVisibleCards((prev) => Math.min(prev + 3, articles.length));
  };

  const handleSaveArticle = (article) => {
    const isAlreadySaved = savedArticles.some(
      (saved) => saved.url === article.url
    );

    if (!isAlreadySaved) {
      setSavedArticles((prev) => [...prev, article]);
    }
  };

  const handleUnsaveArticle = (article) => {
    const updatedList = savedArticles.filter(
      (saved) => saved.url !== article.url
    );
    setSavedArticles(updatedList);
  };

  function handleOpenLoginModal() {
    setIsLoginOpen(true);
  }

  return (
    <div className="app">
      <Header
        isLoggedIn={!!currentUser}
        onLoginClick={() => setIsLoginOpen(true)}
        onLogoutClick={handleLogout}
        currentUser={currentUser}
        onSearch={handleSearch}
        isLoading={isLoading}
        isSavedPage={isSavedArticlesPage}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                articles={articles.slice(0, visibleCards)}
                isLoading={isLoading}
                error={error}
                onShowMore={handleShowMore}
                showMoreVisible={visibleCards < articles.length}
                isLoggedIn={!!currentUser}
                onSave={handleSaveArticle}
                onUnsave={handleUnsaveArticle}
                visibleCards={visibleCards}
                onSearch={handleSearch}
                savedArticles={savedArticles}
              />
            }
          />
          <Route
            path="/saved-articles"
            element={
              <SavedArticles
                articles={savedArticles}
                onDelete={(index) =>
                  setSavedArticles(savedArticles.filter((_, i) => i !== index))
                }
                currentUser={currentUser}
                onHomeClick={() => {}}
                onSignOut={handleLogout}
              />
            }
          />
        </Routes>
      </main>

      <Footer isSavedPage={isSavedArticlesPage} />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        onSubmit={handleRegister}
        onRegister={handleRegister}
        onSwitchToLogin={() => {
          setRegisterModalOpen(false);
          setIsLoginOpen(true);
        }}
        errorMessage={registerError}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        openLoginModal={handleOpenLoginModal}
        message="Registration successful! Welcome aboard."
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setRegisterModalOpen(true);
        }}
        errorMessage={loginError}
      />
    </div>
  );
}

export default App;
