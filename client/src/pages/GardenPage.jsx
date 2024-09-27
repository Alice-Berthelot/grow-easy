import { useParams } from "react-router-dom";

function GardenPage() {
  const foodList = useLoaderData;
  const [foods, setFoods] = useState([]);

    
      useEffect(() => {
        fetch("http://localhost:3310/api/foods")
          .then((response) => response.json())
          .then((data) => setFoods(data))
          .catch((err) => console.error(err));
      }, []);
    
      const [constrains, setConstrains] = useState("");
    
      const handleConstrainsChange = (event) => {
        setConstrains(event.target.value);
      };
      const filteredConstrains =
        constrains === ""
          ? foodList
          : foodList.filter(
              (food) => food.exposition === constrains
            );
    
      return (
        <>
          <h1>My foods</h1>
          <form className="food_form">
            <label htmlFor="food_select">
              Filter by type {" "}
              <select
                id="food_select"
                onChange={handleConstrainsChange}
                value={constrains}
              >
                <option value="">---</option>
                {foods.map((food) => (
                  <option key={food.id} value={food.id}>
                    {food.type}
                  </option>
                ))}
              </select>
            </label>
          </form>
          <ul className="food_list" >
            {filteredConstrains.length > 0 &&
              filteredConstrains.map((food) => (
                <li key={food.id}>
                  <Link to={`/foods/${food.id}`}>
                    <Foods food={food} />
                  </Link>
                </li>
              ))}
          </ul>
        </>
      );
    }

export default GardenPage;