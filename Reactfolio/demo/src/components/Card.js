import './Card.css'

function Card(Props) {
    return (<div className="card">
        {Props.children}
    </div>);
}

export default Card;