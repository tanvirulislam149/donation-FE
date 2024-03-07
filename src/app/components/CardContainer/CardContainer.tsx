import React from "react";
import Card from "../Card/Card";
import { IDonation } from "@/types/globalTypes";

const getData = async () => {
	const res = await fetch("https://donation-be.onrender.com/getAllDonation", {
		cache: "no-store",
	});
	return res.json();
};

const CardContainer = async () => {
	let data = await getData();

	return (
		<>
			<div className="font-bold text-5xl mt-24 text-green-500 flex justify-center">
				<div>
					<p>Categories</p>
					<hr className="h-2 bg-green-500 w-14 mt-2" />
				</div>
			</div>
			<div className="flex justify-center">
				<div className="my-8 grid xl:grid-cols-4 md:grid-cols-2 gap-y-10">
					{data.map((d: IDonation) => (
						<Card key={d._id} data={d} />
					))}
				</div>
			</div>
		</>
	);
};

export default CardContainer;
