import React from "react";
import "./SavedArticles.css";

function SavedArticles({ articles = [], onDelete, currentUser }) {
  const getKeywords = () => {
    const keywords = articles.map((a) => a.keyword).filter(Boolean);
    return [...new Set(keywords)];
  };

  const keywords = getKeywords();
  const keywordPreview = keywords.slice(0, 3);
  const extraKeywordCount = keywords.length - keywordPreview.length;

  const generateKey = (article, index) =>
    article._id || article.id || `${article.title || "untitled"}-${index}`;

  return (
    <div className="saved-articles">
      <main className="saved-articles__main">
        <section className="saved-articles__intro-section">
          <div className="saved-articles__container">
            <div className="saved-articles__breadcrumb">Saved articles</div>

            <h1 className="saved-articles__title">
              {currentUser}, you have {articles.length} saved article
              {articles.length !== 1 ? "s" : ""}
            </h1>

            {keywords.length > 0 && (
              <p className="saved-articles__keywords">
                By keywords: <strong>{keywordPreview.join(", ")}</strong>
                {extraKeywordCount > 0 && `, and ${extraKeywordCount} more`}
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
                {articles.map((article, index) => {
                  const key = generateKey(article, index);
                  const imageSrc =
                    article.image ||
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80";
                  const altText = article.title || "Saved article image";
                  const formattedDate = (() => {
                    try {
                      return article.date
                        ? new Date(article.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Date not available";
                    } catch {
                      return "Date not available";
                    }
                  })();

                  return (
                    <li key={key} className="saved-articles__item">
                      <div className="saved-articles__image-container">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="saved-articles__link"
                        >
                          <img
                            src={imageSrc}
                            alt={altText}
                            className="saved-articles__image"
                          />
                          <div className="saved-articles__category">
                            {article.keyword || "News"}
                          </div>
                        </a>

                        <button
                          type="button"
                          className="saved-articles__bookmark saved-articles__bookmark--saved"
                          onClick={(e) => {
                            e.preventDefault();
                            onDelete(article.url);
                          }}
                          aria-label="Remove from saved"
                        />
                        <div className="saved-articles__remove-text">
                          Remove from saved
                        </div>
                      </div>

                      <div className="saved-articles__content">
                        <div className="saved-articles__date">
                          {formattedDate}
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
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SavedArticles;
