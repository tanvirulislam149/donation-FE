"use client";
import React, { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import axios from "axios";
import { IDonation } from "@/types/globalTypes";
import Link from "next/link";
import Loading from "../Loading/Loading";

const DonationCardCont = () => {
	const [user, userLoading] = useAuthState(auth);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios(`https://donation-be.onrender.com/getUserDonation/${user?.email}`)
			.then(function (response) {
				setData(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	return (
		<div className="flex justify-center mb-20">
			<div>
				<div className="grid lg:grid-cols-2 gap-10 md:mx-3 mx-0">
					{loading ? (
						<Loading />
					) : data.length ? (
						data.map((d: IDonation) => <DonationCard key={d._id} data={d} />)
					) : (
						<p>No Data found</p>
					)}
				</div>
				{data.length ? (
					<div className="flex justify-center mt-10">
						<Link href={"/myAllDonation"}>
							<button className="btn btn-primary">See All</button>
						</Link>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default DonationCardCont;
