import DifficultyWateringCan from "./DifficultyWateringCan";

import "./Foods.css";

function Foods({ food }) {
  const { type, nom, photo_legume, info_pratique, difficulté } = food;

  return (
    <section className="category">
      <article className="foods_card">
        <h2 className="foods_name"> {nom} </h2>
        <h3 className="foods_type"> {type} </h3>
        <img src={photo_legume} alt={nom} className="food_photo" />
        <p className="foods_para">À savoir : {info_pratique}. </p>
        <p className="foods_para_smiley">
          {" "}
          <DifficultyWateringCan difficulté={difficulté} />{" "}
        </p>
      </article>
    </section>
  );
}

export default Foods;
