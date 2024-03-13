"use client";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { IDonation } from "@/types/globalTypes";
import auth from "../../../firebase.init";
import PrivateRoute from "../components/PrivateRoute";
import Loading from "../components/Loading/Loading";

const DonationCardCont = () => {
	const [user, userLoading] = useAuthState(auth);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios(`https://donation-be.onrender.com/getUserAllDonation/${user?.email}`)
			.then(function (response) {
				setData(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [user]);
	return (
		<PrivateRoute>
			<div className="flex justify-center my-5 mb-20">
				<div className="overflow-x-auto w-3/4">
					<p className="text-center text-3xl font-bold mb-5">My Donations</p>
					{loading ? (
						<Loading />
					) : data.length ? (
						<table className="table text-base">
							{/* head */}
							<thead>
								<tr className="text-black text-base">
									<th>#</th>
									<th>Title</th>
									<th>Category</th>
									<th>Donation</th>
								</tr>
							</thead>
							<tbody>
								{data.map((d: IDonation, index) => (
									<tr key={d._id}>
										<th>{index + 1}</th>
										<td>{d.title}</td>
										<td>{d.donation_category}</td>
										<td>${d.money}</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p className="text-center font-bold">No Data found</p>
					)}
				</div>
			</div>
		</PrivateRoute>
	);
};

export default DonationCardCont;
