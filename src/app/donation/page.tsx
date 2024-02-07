import React from "react";
import DonationCardCont from "../components/DonationCardCont/DonationCardCont";
import PrivateRoute from "../components/PrivateRoute";

const DonationPage = () => {
	return (
		<div className="mt-10">
			<PrivateRoute>
				<DonationCardCont />
			</PrivateRoute>
		</div>
	);
};

export default DonationPage;
