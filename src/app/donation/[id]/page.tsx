import DonationDetails from "@/app/components/DonationDetail/DonationDetails";
import PrivateRoute from "@/app/components/PrivateRoute";
import React from "react";

const getData = async ({ id }: { id: string }) => {
	const res = await fetch(`http://localhost:5000/getDonation/${id}`, {
		cache: "no-store",
	});
	return res.json();
};

const DonationDetailsPage = async ({ params }: { params: { id: string } }) => {
	const data = await getData(params);
	return (
		<div>
			<PrivateRoute>
				<DonationDetails data={data} />
			</PrivateRoute>
		</div>
	);
};

export default DonationDetailsPage;
