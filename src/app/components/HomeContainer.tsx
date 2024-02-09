"use client";
import React, { useState } from "react";
import Banner from "./Banner/Banner";
import CardContainer from "./CardContainer/CardContainer";
import { IDonation } from "@/types/globalTypes";

const HomeContainer = ({ data }: { data: IDonation[] }) => {
	const [search, setSearch] = useState("");
	return (
		<div>
			<Banner search={search} setSearch={setSearch} />
			<CardContainer data={data} search={search} />
		</div>
	);
};

export default HomeContainer;
