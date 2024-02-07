import React from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationCardCont = () => {
	return (
		<div className="flex justify-center">
			<div>
				<div className="grid grid-cols-2 gap-16">
					<DonationCard />
					<DonationCard />
					<DonationCard />
					<DonationCard />
				</div>
				<div className="flex justify-center mt-10">
					<button className="btn btn-primary">See All</button>
				</div>
			</div>
		</div>
	);
};

export default DonationCardCont;
