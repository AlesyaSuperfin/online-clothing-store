import { Link } from "react-router-dom";

function Clothes ({dataClothes}) {
    return(
        <div className="products">
            {dataClothes.map((element => {
                const {id, name, price, image} = element;
                return(
                    <div key={id} className="product-card">
                        <Link to={`/about/${element.title}`}>
                        <img src={image} alt="item" className="productPhoto" width="300px" height="450px"/>
                        </Link>
                        <h3>{name}</h3>
                        <h4>{price} $</h4>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothes;