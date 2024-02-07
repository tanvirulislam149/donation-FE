import React from "react";
import Card from "../Card/Card";

const CardContainer = () => {
	return (
		<div className="flex justify-center">
			<div className="my-20 grid grid-cols-3 gap-10">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default CardContainer;
