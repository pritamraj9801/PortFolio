import SectionHeader from "./SectionHeader";
import { useEffect, useState } from "react";
export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/GetAllArticles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);
  return(
    <>
      <SectionHeader sectionName="Articles" />
      <div id="articles-container">
        {articles.map((article) => (
          <div className="article-card" data-aos="fade-up">
            <h3 className="article-title">{article.articleTitle}</h3>
            <p className="article-descriptiom">{article.articleDescription}</p>
            <a className="article-readbtn" href={article.Link} target="_blank" rel="noreferrer">Read &nbsp;&nbsp; <i class="fa-brands fa-readme"></i></a>
          </div>
        ))}
      </div>
    </>
  );
}
