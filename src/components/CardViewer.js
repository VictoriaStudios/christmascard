import { useState } from "react"
import Card from "./Card"
import image1 from "../images/image1.jpg"

const CardViewer = () => {
    const card1 = {
        title: "Hola mi amor",
        image: image1,
        text: "Este es un regalito para tí"
    }

    const card2 = {
        title: "Test title2",
        image: "",
        text: "Test text2"
    }
    const [cards, setCards] = useState([card1, card2])
    const [cardIndex, setCardIndex] = useState(0)

    function incrementIndex () {
        if (cardIndex < cards.length-1){
            setCardIndex(cardIndex+1)
        }
        else{
            setCardIndex(0)
        }
    }

    function decrementIndex() {
        if (cardIndex === 0) {
            setCardIndex(cards.length-1)
        }
        else{
            setCardIndex(cardIndex-1)
        }

    }

    return (
        <div>
            <div className="cardBackground">
                <Card title={cards[cardIndex].title} text={cards[cardIndex].text} image={cards[cardIndex].image} incrementIndex={incrementIndex} decrementIndex={decrementIndex} />
            </div>
        </div>
    )
}

export default CardViewer
