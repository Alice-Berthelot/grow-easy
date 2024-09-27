import { useParams } from 'react-router-dom';

import foodList from "../assets/df_potager.json";
import DifficultyWateringCan from './DifficultyWateringCan';
import NavBar from "../components/NavBar.jsx"

import "./Food.css";
import Footer from './Footer.jsx';

function Food() {
const food = useParams();
const aliment = foodList.find(foodItem => foodItem.nom === food.food);

const {
    type,
    nom,
    photo_legume,
    Exposition,
    Rusticité,
    info_pratique,
    difficulté,
    Profondeur_semis,
    Espacement,
    Ecart_rangs,
    temps_levé,
    température_levée,
    semis_récolte,
  } = aliment;

    return (
        <>
        <NavBar/>
        <h1 className='food_title'>Toutes les informations utiles</h1>
        <article className="food_card">
          <h2 className="food_name"> {nom} </h2>
          <h3 className="food_type"> {type} </h3>
          <img src={photo_legume} alt={nom} className="food_photo" />
          <p className='food_para'>Exposition : {Exposition}. </p>
          <p className='food_para'>Rusticité : {Rusticité}. </p>
          <p className='food_para'>À savoir : {info_pratique}. </p>
          <p className='food_para'>Difficulté : <DifficultyWateringCan difficulté={difficulté}/> </p>
          <p className='food_para'>Profondeur des semis : {Profondeur_semis} cm.</p>
          <p className='food_para'>Espacement : {Espacement} cm.</p>
          <p className='food_para'>Écart entre les rangs : {Ecart_rangs} cm.</p>
          <p className='food_para'>Temps de levée : {temps_levé} jours.</p>
          <p className='food_para'>Température de levée : {température_levée}°c. </p>
          <p className='food_para'>Du semis à la récolte : {semis_récolte} jours.</p>
        </article>
        <Footer/>
        </>
      );
    }
  

export default Food;