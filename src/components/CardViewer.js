import { useState } from "react"
import Card from "./Card"

const CardViewer = () => {
    const [cards, setCards] =  useState([]) 
    const [currentCard, setCurrentCard] = useState ('')
    const testCard = {title:"Test title",
                        image:"",
                        text:"Test text"
                    }
    return (
        <div>
            <div className="cardBackground">
                <Card title={testCard.title} image={testCard.image} text={testCard.text}/>
            </div>
        </div>
    )
}

export default CardViewer
