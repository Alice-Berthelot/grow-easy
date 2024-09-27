import { Link } from "react-router-dom";

function Introduction() {
  return (
    <section className="home_section_intro">
      <h1>Bienvenue !</h1>
      <div className="home_intro_frame_deco"></div>
      {/* <article className="home_intro_article"> */}
      <p>
      Savez-vous planter les choux ? 
      <br></br>
      <br></br>
        Découvrez des astuces pour créer votre propre potager
      </p>
      <img src="../src/assets/images/carots.png" alt="carottes" className="home_img_carots"/>
      {/* </article> */}
      <img src="../src/assets/images/arrow.png" alt="arrow" className="home_intro_arrow"/>
      <img src="../src/assets/images/astuces.png" alt="astuces" className="home_intro_astuces"/>
      <Link to="/informations"><img src="../src/assets/images/gants.png" alt="gants" className="home_intro_img"></img></Link>
    </section>
  );
}

export default Introduction;
