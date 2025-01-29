const baseUrl = "http://mes-quiz.local/wp-json/wp/v2/";

export const fetchQuizTags = async () => {
	const response = await fetch(baseUrl + "quiz");
	const result = await response.json();
	const idArray = result.map((quiz) => {
		return {
			id: quiz.id,
			titre: quiz.titre,
			description: quiz.description,
			difficulte: quiz.difficulte[0],
		};
	});

	return idArray;
};

export const fetchQuiz = async (id) => {
	const response = await fetch(baseUrl + "quiz/" + id);
	const result = await response.json();

	const cleanResult = {
		id: result.id,
		titre: result.titre,
		description: result.description,
		difficulte: result.difficulte[0],
		questions: result.questions.map((question) => {
			return {
				id: question.id,
				question: question.question,
				reponses: question.reponses_acceptees,
			};
		}),
	};
	return cleanResult;
};
