import Banner from "./components/Banner/Banner";
import CardContainer from "./components/CardContainer/CardContainer";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import WordsFromKids from "./components/WordsFromKids/WordsFromKids";

const Home = () => {
	return (
		<main>
			<Banner />
			<CardContainer />
			<HowWeWork />
			<WordsFromKids />
		</main>
	);
};

export default Home;
