import SectionHeader from "./SectionHeader";
import  articlesData  from "../Data/articlesData";
export default function Articles() {
 
  return(
    <>
      <SectionHeader sectionName="Articles" />
      <div id="articles-container">
        {articlesData.map((article) => (
          <div className="article-card" data-aos="fade-up" key={article.id}>
            <h3 className="article-title">{article.Title}</h3>
            <p className="article-descriptiom">{article.Description}</p>
            <a className="article-readbtn" href={article.articleURL} target="_blank" rel="noreferrer">Read &nbsp;&nbsp; <i className="fa-brands fa-readme"></i></a>
          </div>
        ))}
      </div>
    </>
  );
}
