
import { Link, useParams } from "react-router-dom";
import foodList from "../assets/df_potager.json";
import Footer from "../components/Footer";
import Foods from "../components/Foods";
import NavBar from "../components/NavBar";

import "./LesgumesPage.css";

function Legumes() {
    // const [foods, setFoods] = useState([]);
      
    // useEffect(()=> {
    //   setFoods(foodList);
    // }, []);
  
    const {type} = useParams();

//     const [selectedFood, setSelectedFood] = useState("");
  
// setSelectedFood("legumes")

const legumes = foodList.filter((food) => food.type.toLowerCase() === type);
console.log(legumes)
  
    return (
      <>
      <NavBar />
     
      <h1 className="categories_title">Les {type}</h1>
      <section className="categories_section">
        <ul className="food_list" >
          {legumes &&
            legumes.map((food) => (
              <li key={food.id}>
                <Link to={`/aliments/${food.nom}`}>
                  <Foods food={food} />
                </Link>
              </li>
            ))}
        </ul>
        </section>
        <Footer />
      </>
        )
}
    export default Legumes