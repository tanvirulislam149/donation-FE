"use client";
import { useState } from "react";
import Banner from "./components/Banner/Banner";
import CardContainer from "./components/CardContainer/CardContainer";

export default function Home() {
	const [search, setSearch] = useState("");
	return (
		<main>
			<Banner search={search} setSearch={setSearch} />
			<CardContainer />
		</main>
	);
}
