import "./App.css";
import { fetchQuizTags, fetchQuiz } from "./services/wp.service";
import { useEffect, useState } from "react";
import Quiz from "./components/quiz/quiz";

function App() {
	//Array d'objets avec titre, description, difficulté
	const [quizTags, setQuizTags] = useState(null);
	//ID du quiz choisi
	const [quizId, setQuizId] = useState(33);
	//Data du quiz choisi
	const [quizData, setQuizData] = useState(null);

	useEffect(() => {
		fetchQuizTags().then((result) => {
			setQuizTags(result);
			console.log(result);
		});
	}, []);

	useEffect(() => {
		if (quizId) {
			fetchQuiz(quizId).then((result) => {
				setQuizData(result);
			});
		}
	}, [quizId]);

	return <>{quizData && <Quiz {...quizData} />}</>;
}

export default App;
