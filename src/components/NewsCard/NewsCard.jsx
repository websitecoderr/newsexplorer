import React, { useState } from "react";
import "./NewsCard.css";

function NewsCard({ article, isSaved, onSave, onUnsave, isLoggedIn }) {
  const { title, description, url, image, date, source } = article;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (!isLoggedIn) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
      return;
    }
    isSaved ? onUnsave(article) : onSave(article);
  };

  return (
    <article className="news-card">
      <a
        href={url}
        className="news-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={image}
          alt={title}
          className="news-card__image"
          loading="lazy"
        />
        <div className="news-card__content">
          <p className="news-card__date">{formattedDate}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__description">
            {description || "No description available"}
          </p>
          <p className="news-card__source">{source || "Unknown Source"}</p>
        </div>
      </a>
      <button
        className={`news-card__save-button 
    ${isLoggedIn ? "news-card__save-button_logged-in" : ""} 
    ${isSaved ? "news-card__save-button_saved" : ""}`}
        onClick={handleClick}
        onMouseEnter={() => !isLoggedIn && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isSaved ? "Remove from saved" : "Save article"}
      >
        {!isLoggedIn && showTooltip && (
          <span className="news-card__tooltip">Sign in to save articles</span>
        )}
      </button>
    </article>
  );
}

export default NewsCard;
