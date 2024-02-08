import React from "react";
import Card from "../Card/Card";
import { IDonation } from "@/types/globalTypes";

const getData = async () => {
	const res = await fetch("http://localhost:5000/getAllDonation", {
		cache: "no-store",
	});
	return res.json();
};

const CardContainer = async () => {
	const data = await getData();
	return (
		<div className="flex justify-center">
			<div className="my-20 grid xl:grid-cols-3 md:grid-cols-2 gap-10">
				{data.map((d: IDonation) => (
					<Card key={d._id} data={d} />
				))}
			</div>
		</div>
	);
};

export default CardContainer;
