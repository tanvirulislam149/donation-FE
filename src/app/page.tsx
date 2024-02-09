import HomeContainer from "./components/HomeContainer";

const getData = async () => {
	const res = await fetch("https://donation-be.onrender.com/getAllDonation", {
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
