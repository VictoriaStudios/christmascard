

const Card = ({ title, text, image, incrementIndex, decrementIndex, animClass }) => {
    function handleNext(){
        incrementIndex()

    }

    function handlePrev(){
        decrementIndex()
    }
    return (
        <div>
            <h1 className={animClass}>{title}</h1>
            <div className="cardSlider">
                <h3 onClick={handlePrev}> &lt; </h3>
                <img className={"cardImage " + animClass} src={image} />
                <h3 onClick={handleNext}> &gt; </h3>
            </div>
            <h2 className={animClass}>{text}</h2>
        </div>
    )
}

export default Card
