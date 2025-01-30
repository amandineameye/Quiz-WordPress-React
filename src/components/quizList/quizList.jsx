import style from "./quizList.module.css";

const QuizTag = ({id, titre, difficulte, description, imageUrl, onChoose}) => {


    return <div className={style.tag} onClick={() => onChoose(id)}>
        <p className={style.quizTitle}>{titre}</p>
        <p className={style.difficulte}>{difficulte}</p>
        <img className={style.imgTag} src={imageUrl} alt={titre} />
        <p className={style.description}>{description}</p>
    </div>
}

const QuizList = ({quizTags, onChoose}) => {
    return <div className={style.container} >
    {
        quizTags.map((tag) => (
             <QuizTag key={tag.id} {...tag} onChoose={onChoose}/>
        ))
    }
    </div>
}

export default QuizList; 