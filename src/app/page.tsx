import Banner from "./components/Banner/Banner";
import CardContainer from "./components/CardContainer/CardContainer";
import HomeContainer from "./components/HomeContainer";

const getData = async () => {
	const res = await fetch("http://localhost:5000/getAllDonation", {
		cache: "no-store",
	});
	return res.json();
};

const Home = async () => {
	const data = await getData();

	return (
		<main>
			<HomeContainer data={data} />
		</main>
	);
};

export default Home;
