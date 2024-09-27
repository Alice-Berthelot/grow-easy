import { Link } from "react-router-dom";

function ButtonFilter() {
  return (
    <>
      <article className="home_filter_article">
        <header className="home_filter_header">
          <Link to="/legumes">
            <h2 className="home_filter_title">Légumes</h2>
          </Link>
        </header>
      </article>
      <article className="home_filter_article2">
        <header className="home_filter_header">
        <Link to="/fruits">
            <h2 className="home_filter_title">Fruits</h2>
          </Link>
        </header>
      </article>
      <article className="home_filter_article3">
        <header className="home_filter_header">
        <Link to="/aromates">
            <h2 className="home_filter_title">Aromates</h2>
          </Link>
        </header>
      </article>
      <article className="home_filter_article4">
        <header className="home_filter_header">
        <Link to="/aliments">
            <h2 className="home_filter_title">All-in-one</h2>
          </Link>
        </header>
      </article>
    </>
  );
}

export default ButtonFilter;
