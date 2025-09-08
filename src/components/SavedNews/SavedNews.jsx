import React from "react";
import "./SavedNews.css";

function SavedNews({ articles = [], onDelete }) {
  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <h2 className="saved-news__title">Saved Articles</h2>
        <p className="saved-news__count">
          {articles.length > 0
            ? `You have ${articles.length} saved ${
                articles.length === 1 ? "article" : "articles"
              }.`
            : "You haven’t saved any articles yet."}
        </p>
      </section>

      {articles.length > 0 && (
        <section className="saved-news__list">
          {articles.map((article, index) => (
            <article key={index} className="saved-news__card">
              <img
                src={article.image}
                alt={article.title}
                className="saved-news__image"
              />
              <div className="saved-news__content">
                <p className="saved-news__keyword">{article.keyword}</p>
                <button
                  className="saved-news__delete"
                  onClick={() => onDelete(index)}
                  aria-label="Remove article"
                >
                  ✕
                </button>
                <p className="saved-news__date">{article.date}</p>
                <h3 className="saved-news__headline">{article.title}</h3>
                <p className="saved-news__description">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="saved-news__source"
                >
                  {article.source}
                </a>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default SavedNews;
