import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsResults from "../NewsResults/NewsResults";
import Image from "../../images/1000132344.jpg";


function Main({
  articles,
  isLoading,
  error,
  onShowMore,
  showMoreVisible,
  isLoggedIn,
  onSave,
  onUnsave,
  visibleCards,
  onSearch,
  savedArticles,
}) {
  return (
    <div className="main">
      <section className="main__hero">
        <div className="main__hero-content">
          <h1 className="main__hero-title">What's going on in the world?</h1>
          <p className="main__hero-subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm onSearch={onSearch} />
        </div>
      </section>

      {isLoading ? (
        <Preloader />
      ) : (
        <NewsResults
          articles={articles}
          isLoading={isLoading}
          error={error}
          isLoggedIn={isLoggedIn}
          onSave={onSave}
          onUnsave={onUnsave}
          visibleCards={visibleCards}
          onShowMore={onShowMore}
          showMoreVisible={showMoreVisible}
          savedArticles={savedArticles}
        />
      )}

      <section className="main__about">
        <div className="main__about-content">
          <img src={Image} alt="" className="main__author-image" />
          <div className="main__about-text">
            <h2 className="main__about-title">About the author</h2>
            <p className="main__about-description">
              This block describes the project author. Here you should indicate
              your name, what you do, and which development technologies you
              know.
            </p>
            <p className="main__about-description">
              You can also talk about your experience with TripleTen, what you
              learned there, and how you can help potential customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
