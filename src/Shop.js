import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Clothes from "./Clothes";

function Shop() {
    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
      const newClothes = data.filter(element => element.searchTerm.includes(searchTerm));
      setClothes(newClothes);
    }

    return(
      <div>
        <div className='header'>
        <h2 className='back'>Welcome to "Estetica" Online Store</h2>
        <p>Free Delivery from 99$</p>
        </div>
        <Buttons filteredClothes={chosenClothes} setClothes={setClothes} />
        <Clothes dataClothes={clothes} />
      </div>
    )
  }

export default Shop;