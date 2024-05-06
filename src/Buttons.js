import { data } from "./data";

function Buttons ({filteredClothes, setClothes}) {
    return(
        <div>
        <div className="cont">
        <button className="person" onClick={() => filteredClothes('woman')}>Woman</button>
        <button className="person" onClick={() => filteredClothes('man')}>Man</button>
        <button className="person" onClick={() => filteredClothes('kids')}>Kids</button>
        </div>
        <div className="cont">
            <button className="change" onClick={() => setClothes(data)}>All clothes</button>
            <button className="change" onClick={() => filteredClothes('dress')}>Dresses</button>
            <button className="change" onClick={() => filteredClothes('pants')}>Pants</button>
            <button className="change" onClick={() => filteredClothes('skirt')}>Skirts</button>
            <button className="change" onClick={() => filteredClothes('shirt')}>Shirts</button>
            <button className="change" onClick={() => filteredClothes('shoes')}>Shoes</button>
        </div>
        </div>
    )
}

export default Buttons;