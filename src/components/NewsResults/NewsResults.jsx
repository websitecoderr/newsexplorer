import React from "react";
import "./NewsResults.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsResults({
  articles = [],
  isLoading,
  error,
  isLoggedIn,
  onSave,
  onUnsave,
  visibleCards,
  onShowMore,
  showMoreVisible,
  savedArticles,
}) {
  if (!isLoading && !error && articles.length === 0) {
    return null;
  }

  if (isLoading) {
    return (
      <section className="news-results">
        <div className="news-results__status_loading">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="news-results news-results--centered">
        <img
          src="src/components/images/not-found_v1.svg"
          alt="Not Found Illustration"
        />
        <h3 className="news-results__status_title">Nothing Found</h3>
        <p className="news-results__status news-results__status--error">
          Sorry, but nothing matched{" "}
          <span className="line-break">your search terms.</span>
        </p>
      </section>
    );
  }

  const displayedArticles = articles.slice(0, visibleCards);

  return (
    <section className="news-results">
      {displayedArticles.length > 0 && (
        <h2 className="news-results__title">Search Results</h2>
      )}
      <div className="news-results__list">
        {displayedArticles.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            isSaved={savedArticles.some((saved) => saved.url === article.url)}
            onSave={onSave}
            onUnsave={onUnsave}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
      {showMoreVisible && (
        <button className="news-results__show-more" onClick={onShowMore}>
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsResults;
