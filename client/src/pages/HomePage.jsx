import ButtonFilter from "../components/ButtonFilter";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Introduction from "../components/Introduction";
import "./HomePage.css";
import "../components/Footer.css"

function HomePage() {
  return (
    <>
    <Home />
    <Introduction />
    <section className="home_filter_section">
    <ButtonFilter />
    </section>
    <Footer />
    </>
  )
}

export default HomePage;