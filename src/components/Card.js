

const Card = ({title, text, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <image src={image}/>
            <h2>{text}</h2>
        </div>
    )
}

export default Card
