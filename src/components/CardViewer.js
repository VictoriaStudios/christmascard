import { useState } from "react"
import Card from "./Card"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.JPG"
import image4 from "../images/image4.png"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.jpg"
import image10 from "../images/image10.jpg"
import image11 from "../images/image11.jpg"
import image12 from "../images/image12.jpg"

const CardViewer = () => {
    const card1 = {
        title: "Hola mi amor",
        image: image1,
        text: "Este es un regalito para tí"
    }

    const card2 = {
        title: "Como empezamos",
        image: image2,
        text: "Todo empozó hace más que siete años..."
    }

    const card3 = {
        title: "Conocí tu país",
        image: image3,
        text: "Y me enamoré más de ti..."
    }

    const card4 = {
        title: "Nos casamos rápido",
        image: image4,
        text: "No estuvimos preparados..."
    }

    const card5 = {
        title: "Pero nos disfrutamos",
        image: image5,
        text: "Con una familia cariñosa..."
    }

    const card6 = {
        title: "También conociste a mi país",
        image: image6,
        text: "Y seguimos juntos, locos,..."
    }

    const card7 = {
        title: "Conocimos un lugar maravilloso",
        image: image7,
        text: "Y disfrutamos las mejores vacaciones jamás..."
    }

    const card8 = {
        title: "Antes que llegó el",
        image: image8,
        text: "El regalo más grande de todos..."
    }

    const card9 = {
        title: "Seguimos felices y leales",
        image: image9,
        text: "En tiempos buenos y duros..."
    }

    const card10 = {
        title: "Lo vímos crecer",
        image: image10,
        text: "Y aprender tantas cosas..."
    }

    const card11 = {
        title: "Todo lo logramos juntos",
        image: image11,
        text: "No importaba donde estuvimos"
    }

    const card12 = {
        title: "Siempre te amaré",
        image: image12,
        text: "Feliz navidad, mi amor!"
    }


    const [cards, setCards] = useState([card1, card2, card3, card4, card5, card6, card7,card8,card9,card10,card11,card12])
    const [cardIndex, setCardIndex] = useState(0)
    const [animClass, setAnimClass] = useState("")

    function incrementIndex () {
        playFadeOutAnimation()
        setTimeout(() => {
            if (cardIndex < cards.length-1){
                setCardIndex(cardIndex+1)
            }
            else{
                setCardIndex(0)
            }
            playFadeInAnimation()
        }, 600)

        
    }

    function decrementIndex() {
        playFadeOutAnimation()
        setTimeout(() => {
            if (cardIndex === 0) {
                setCardIndex(cards.length-1)
            }
            else{
                setCardIndex(cardIndex-1)
            }
            playFadeInAnimation()
        }, 600)
        
    }

    function playFadeOutAnimation() {
        setAnimClass("fadeOut")
    }

    function playFadeInAnimation() {
        setAnimClass("fadeIn")
    }

    return (
        <div>
            <div className="cardBackground">
                <Card title={cards[cardIndex].title} text={cards[cardIndex].text} image={cards[cardIndex].image} incrementIndex={incrementIndex} decrementIndex={decrementIndex} animClass={animClass}/>
            </div>
        </div>
    )
}

export default CardViewer
