

const Card = ({ title, text, image, incrementIndex, decrementIndex }) => {
    function handleNext(){
        incrementIndex()

    }

    function handlePrev(){
        decrementIndex()
    }
    return (
        <div>
            <h1>{title}</h1>
            <div className="cardSlider">
                <h3 onClick={handlePrev}> &lt; </h3>
                <img className="cardImage fadeOut" src={image} />
                <h3 onClick={handleNext}> &gt; </h3>
            </div>
            <h2>{text}</h2>
        </div>
    )
}

export default Card
