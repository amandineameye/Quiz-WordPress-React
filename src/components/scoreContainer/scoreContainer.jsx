import style from "./scoreContainer.module.css";

const ScoreContainer = ({ percentage, goBackHome }) => {
	return (
		<div>
			<div className={style.container}>
				<p className={style.title}>Résultat</p>
				<p className={style.message}>
					Le quiz est terminé. Ton score est de {percentage} % !
				</p>
			</div>
			<button className={style.backHomeBtn} onClick={goBackHome}>
				Retour à la page d'accueil
			</button>
		</div>
	);
};

export default ScoreContainer;
