import { useState } from "react";
import * as fuzzball from "fuzzball";
import style from "./quiz.module.css";
import ScoreContainer from "../scoreContainer/scoreContainer";

const Quiz = ({ titre, questions, goBackHome }) => {
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
		<>
			{finished ? (
				<ScoreContainer percentage={scorePercentage} goBackHome={goBackHome} />
			) : (
				<>
					<div className={style.questionBox}>
						<h2 className={style.title}>{titre}</h2>
						<p className={style.question}>{questions[index].question}</p>
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						></input>{" "}
					</div>
					<button className={style.validerBtn} onClick={nextQuestion}>
						Valider
					</button>
				</>
			)}
		</>
	);
};

export default Quiz;
