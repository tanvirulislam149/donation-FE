import React from "react";
import Card from "../Card/Card";
import { IDonation } from "@/types/globalTypes";

const CardContainer = ({
	data,
	search,
}: {
	data: IDonation[];
	search: string;
}) => {
	let filteredData = data;

	if (search) {
		filteredData = filteredData!.filter((item) =>
			item.donation_category?.toLowerCase().includes(search.toLowerCase())
		);
	}

	return (
		<div className="flex justify-center">
			<div className="my-20 grid xl:grid-cols-3 md:grid-cols-2 gap-10">
				{filteredData.map((d: IDonation) => (
					<Card key={d._id} data={d} />
				))}
			</div>
		</div>
	);
};

export default CardContainer;
