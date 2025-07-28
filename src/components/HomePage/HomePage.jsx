import React from "react";
import "./HomePage.css";
import Main from "../Main/Main";

function HomePage({
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
}) {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <Main
          articles={articles}
          isLoading={isLoading}
          error={error}
          onShowMore={onShowMore}
          showMoreVisible={showMoreVisible}
          isLoggedIn={isLoggedIn}
          onSave={onSave}
          onUnsave={onUnsave}
          visibleCards={visibleCards}
          onSearch={onSearch} // Pass to Main for SearchForm
        />
      </div>
    </div>
  );
}

export default HomePage;
