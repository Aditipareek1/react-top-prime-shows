import "./Card.css";
import Images from "./Images"

function Card(props){
    return (
        <>
        <div className="cards">
        <div className="card">
            <Images imgSrc={props.imgSrc}/>
            <div className="card_info">
                <span className="card_category">{props.genre}</span>
                <h3 className="card_title">{props.title}</h3>
                <a href={props.link} target="__blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
        </div>
        </>
    )
}

export default Card;