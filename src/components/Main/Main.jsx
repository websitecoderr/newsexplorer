import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsResults from "../NewsResults/NewsResults";
import Image from "../../images/about.jpg";

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
    <main className="main">
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
        <article className="main__about-content">
          <img
            src={Image}
            alt="Portrait of the author"
            className="main__author-image"
          />
          <div className="main__about-text">
            <h2 className="main__about-title">About the author</h2>
            <p className="main__about-description">
              I'm Alex Falla, a full-stack developer and UI/UX enthusiast. I
              specialize in building responsive, accessible, and user-friendly
              web interfaces using technologies like HTML, CSS, JavaScript,
              React, and Tailwind CSS. I turn complex problems into elegant
              solutions and continuously learning new tools to improve my craft.
            </p>
            <p className="main__about-description">
              I went through an intensive training program with TripleTen, where
              I build my skills through real-world projects, agile workflows,
              and collaborative coding challenges. TripleTen taught me not just
              how to write clean, scalable code—but how to think like a
              problem-solver and deliver user-centered solutions.I bring both
              technical expertise and a deep understanding of user experience to
              the table.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;
