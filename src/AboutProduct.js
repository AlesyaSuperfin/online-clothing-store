import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";

function AboutProduct () {
    const navigate = useNavigate();
    const { title } = useParams();

    return (
        <div>
            {data.filter((item) => item.title === title).map ((elem, index) =>{
                return (
                    <div key={index} className="header">
                        <h3>{elem.name}</h3>
                        <h4>Price: {elem.price} $</h4>
                        <img src={elem.image} alt="product" className="productPhotoFull" width="400px"/>
                        <p>{elem.description}</p>
                        <button className="change" onClick={() => navigate(-1)}>Go back</button>
                    </div>
                )
            })}
        </div>
    )

}

export default AboutProduct;