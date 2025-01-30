import "./App.css";
import { fetchQuizTags, fetchQuiz } from "./services/wp.service";
import { useEffect, useState } from "react";
import Quiz from "./components/quiz/quiz";
import QuizList from "./components/quizList/quizList";

function App() {
	//Array d'objets avec titre, description, difficulté
	const [quizTags, setQuizTags] = useState([]);
	//ID du quiz choisi
	const [quizId, setQuizId] = useState(undefined);
	//Data du quiz choisi
	const [quizData, setQuizData] = useState(null);

	
	useEffect(() => {
		//Fetch tous les quiz tags
		fetchQuizTags().then((result) => {
			setQuizTags(result);
			console.log("Quiz tags: ", result);
		});
	}, []);

	useEffect(() => {
		//S'il y a un quiz Id, fetch les data du quiz
		if (quizId) {
			fetchQuiz(quizId).then((result) => {
				setQuizData(result);
			console.log("Quiz choisi: ", result);
			});
		}
	}, [quizId]);

	return <>{quizData ? <Quiz {...quizData} /> : <QuizList quizTags={quizTags} onChoose={(id) => setQuizId(id)} />}</>;
}

export default App;
