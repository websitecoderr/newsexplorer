import React from "react";
import "./SavedArticles.css";

function SavedArticles({ articles = [], onDelete, currentUser }) {
  const getKeywords = () => {
    const keywords = articles.flatMap((article) =>
      article.keyword ? [article.keyword] : []
    );
    const uniqueKeywords = [...new Set(keywords)].slice(0, 3);
    return uniqueKeywords;
  };

  const keywords = getKeywords();

  return (
    <div className="saved-articles">
      <main className="saved-articles__main">
        <section className="saved-articles__intro-section">
          <div className="saved-articles__container">
           <div className="saved-articles__breadcrumb">Saved articles</div>


            <h2 className="saved-articles__title">
              {currentUser}, you have {articles.length} saved article
              {articles.length !== 1 ? "s" : ""}
            </h2>

            {keywords.length > 0 && (
              <p className="saved-articles__keywords">
                By keywords: <strong>{keywords.join(", ")}</strong>
                {articles.length > keywords.length &&
                  `, and ${articles.length - keywords.length} other`}
              </p>
            )}
          </div>
        </section>

        <section className="saved-articles__list-section">
          <div className="saved-articles__container">
            {articles.length === 0 ? (
              <p className="saved-articles__empty">
                You haven't saved any articles yet.
              </p>
            ) : (
              <ul className="saved-articles__list">
                {articles.map((article, index) => (
                  <li key={index} className="saved-articles__item">
                    <div className="saved-articles__image-container">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="saved-articles__link"
                      >
                        <img
                          src={
                            article.urlToimage ||
                            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                          }
                          alt={article.title}
                          className="saved-articles__image"
                        />
                        <div className="saved-articles__category">
                          {article.keyword || "News"}
                        </div>
                      </a>

                      <button
                        className="saved-articles__bookmark saved-articles__bookmark--saved"
                        onClick={(e) => {
                          e.preventDefault();
                          onDelete(index);
                        }}
                        aria-label="Remove from saved"
                      />
                      <div className="saved-articles__remove-text">
                        Remove from saved
                      </div>
                    </div>

                    <div className="saved-articles__content">
                      <div className="saved-articles__date">
                        {article.date
                          ? new Date(article.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Date not available"}
                      </div>
                      <h3 className="saved-articles__headline">
                        {article.title}
                      </h3>
                      <p className="saved-articles__summary">
                        {article.description || "No description available"}
                      </p>
                      <div className="saved-articles__source">
                        {article.source || "Unknown Source"}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SavedArticles;
