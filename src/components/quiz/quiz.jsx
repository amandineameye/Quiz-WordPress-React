import { useState } from "react";
import * as fuzzball from "fuzzball";
import style from "./quiz.module.css";

const Quiz = ({ titre, questions }) => {
	const [index, setIndex] = useState(0);
	const [input, setInput] = useState("");
	const [playerScore, setPlayerScore] = useState(0);
	const [finished, setFinished] = useState(false);

	const quizLength = questions.length;

	const answerCheck = () => {
		const ratiosArray = questions[index].reponses.map((reponse) => {
			return fuzzball.ratio(input, reponse);
		});
		const bestRatio = Math.max(...ratiosArray);
		if (bestRatio > 80) setPlayerScore((prevScore) => prevScore + 1);
	};

	const nextQuestion = () => {
		answerCheck();
		setInput("");

		if (index < questions.length - 1) {
			setIndex((prevIndex) => prevIndex + 1);
		} else setFinished(true);
	};

	const scorePercentage = Math.round((playerScore / quizLength) * 100);



	return (
		<div>
			<h2>{titre}</h2>

			{finished ? (
				<p>Le quiz est terminé. Ton score est de {scorePercentage} %.</p>
			) : (
				<>
					<p>{questions[index].question}</p>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					></input>{" "}
					<button onClick={nextQuestion}>Question suivante</button>{" "}
				</>
			)}
		</div>
	);
};

export default Quiz;
