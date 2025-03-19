import React, { useState } from 'react';
import './styles.css'; 

const Articles = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFilterCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const filteredArticles = articles
    .filter(article =>
      article.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === '' || article.category === filterCategory)
    )
    .sort((a, b) => {
      if (sortOrder === 'latest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOrder === 'oldest') {
        return new Date(a.date) - new Date(b.date);
      } else if (sortOrder === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search projects by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="">Sort by</option>
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
          <option value="alphabetical">Alphabetically</option>
        </select>
        <select value={filterCategory} onChange={handleFilterCategoryChange}>
          <option value="">Filter by category</option>
          <option value="C#">C# Projects</option>
          <option value="React">React Projects</option>
        </select>
      </div>
      <div className="articles_wrapper">
        {filteredArticles.slice(0, 4).map(article => (
          <div key={article.id} className="article" itemscope itemtype="http://schema.org/Article">
            <a className="article_inner" href="#">
              <div className="article_image">
                <img src={article.image} alt={article.name} />
              </div>
              <div className="article_caption">
                <h2 itemprop="name">{article.name}</h2>
                <p itemprop="description">{article.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
