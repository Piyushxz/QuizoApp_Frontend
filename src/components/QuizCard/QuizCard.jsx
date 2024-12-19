import "./QuizCard.css"
export const QuizCard = ({category}) =>{
    const {image,title,description} = category
    return(
        <div className="container d-flex direction-column">
            <div className="img-box">
                <img className="img" src={image} alt ="quizcard"></img>
            </div>
        
        <div className="details">
            <h3 className="title">{title}</h3>
            <span>{description}</span>
        </div>
        <button className="button play-now-btn btn-primary cursor">Play Now</button>
        </div>
    )
}

