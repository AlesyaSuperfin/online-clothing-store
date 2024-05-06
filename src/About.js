import image from './close-up-woman-sandals-near-shopping-bags_23-2148238183.jpg';

function About () {
    return(
        <div className="container">
            <h1>About us</h1>
            <p>"Estetica" is a lifestyle clothing company based on the South Devon Coast. The brand is famous for its wonderfully comfy, colourful sweatshirts in a range of signature brights. More recently introducing unique prints across tunics and skirts, all designed in house in our Devon studio.</p>
            <img src={image} height="500px" />
        </div>
    )
}

export default About;