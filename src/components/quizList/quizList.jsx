const QuizTag = ({id, titre, difficulte, description, imageUrl, onChoose}) => {


    return <div onClick={() => onChoose(id)}>
        <p>{titre}</p>
        <p>{difficulte}</p>
        <img src={imageUrl} alt={titre} />
        <p>{description}</p>
    </div>
}

const QuizList = ({quizTags, onChoose}) => {
    return <div>
    {
        quizTags.map((tag) => (
             <QuizTag key={tag.id} {...tag} onChoose={onChoose}/>
        ))
    }
    </div>
}

export default QuizList; 